import ProfileController from './ProfileController'
import ImageController from './ImageController'
import Auth from './Auth'
const Controllers = {
    ProfileController: Object.assign(ProfileController, ProfileController),
ImageController: Object.assign(ImageController, ImageController),
Auth: Object.assign(Auth, Auth),
}

export default Controllers