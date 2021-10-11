import ApiController from './api-controller'
import LocalStorageProvider from './providers/local-storage-provider'
import { UserCard } from './api-models'

export default {
    cardListService: new ApiController<UserCard>(new LocalStorageProvider())
}
