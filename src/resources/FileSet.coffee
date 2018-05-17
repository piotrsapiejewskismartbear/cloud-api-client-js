import APIResource from './APIResource'
import APIPageable from './APIPageable'

import File from './File'

import Utils from '../Utils'

class FileSet extends APIResource
  constructor: (api, parent, id) ->
    super(api, parent)
    Utils.throwUnlessId(id, 'FileSet')
    @pushSelector('file-sets', id)

  files: ->
    a = new APIPageable(@api, this)
    a.pushSelector('files')
  file: (id) ->
    new File(@api, this, id)



export default FileSet
