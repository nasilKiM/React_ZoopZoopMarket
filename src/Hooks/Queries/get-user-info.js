const { default: UserApi } = require("Apis/userApi")


const PatchUserInfo = (infoEdit) => {
    UserApi.userInfoEdit(infoEdit)
        .then(el => console.log(el.data))
        .catch(err => console.log(err));
}