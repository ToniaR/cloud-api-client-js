import APIList from './APIList'


# APIListStatistics
#
# @class
# @extends APIList
class APIListStatistics extends APIList

  # @constructor
  constructor: (parent) ->
    super(parent)
    @push('statistics')

  # /statistics/device-sessions
  deviceSessions: ->
    new APIList(this).push('device-sessions')



export default APIListStatistics