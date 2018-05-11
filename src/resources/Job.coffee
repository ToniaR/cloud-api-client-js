import './APIResource'
import './APIPageable'

import './Build'

import throwUnlessId from '../Utils'

class Job extends APIResource
  constructor: (api, parent, id) ->
    super(api, parent)
    throwUnlessId(id, 'Job')
    @pushSelector('jobs', id)

  config: ->
    a = new APIResource(@api, this)
    a.pushSelector('config')

  build: (id) ->
    new Build(@api, this, id)
  builds: ->
    a = new APIPageable(@api, this)
    a.pushSelector('builds')



export default Job
