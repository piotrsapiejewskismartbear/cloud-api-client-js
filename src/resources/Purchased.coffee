import APIResource from './APIResource'
import APIPageable from './APIPageable'

import Utils from '../Utils'

class Purchased extends APIResource
  constructor: (api, parent, id) ->
    super(api, parent)
    Utils.throwUnlessId(id, 'Purchased')
    @pushSelector('purchased', id)

  receipt: =>
    a = new APIPageable(@api, this)
    a.pushSelector('receipt')



export default Purchased
