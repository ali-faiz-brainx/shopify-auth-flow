import shopSetting from '../models/shopSetting.js'

export function isShopExist(shopName){
    return new Promise((resolve, reject) => {
        shopSetting
        .findOne({ shopName: shopName, accessToken: { $ne: "" } })
        .then((shop) => {
        if (shop) {
            resolve(true);
        } else {
            resolve(false);
        }
        })
        .catch((err) => {
        reject(err);
        });
    });
}

export function addNewShop(shopName, accessToken) {
    return new Promise((resolve, reject) => {
        shopSetting
        .findOneAndUpdate(
            { shopName },
            {
            accessToken,
            deletedAt: null
            }
        )
        .then((shop) => {
            if (shop) {
            console.log("Shop is already exist in database");
            resolve();
            } else {
            let newShop = {
                shopName,
                accessToken
            };

            let shop = new shopSetting(newShop);

            shop
                .save()
                .then(resolve())
                .catch((err) => {
                console.log("error in adding shop data");
                reject();
                });
            }
        });
    });
}


export const saveShop = (condition, data) => {
    return new Promise((resolve, reject) => {
        shopSetting.findOneAndUpdate(condition, data)
        .then(data => {
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
    })
}