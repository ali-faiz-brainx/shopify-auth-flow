import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ShopSetting = new Schema({
        // Name of shopify store
        shopName: {
            type: String,
            required: true,
        },
        // API access token
        accessToken: {
            type: String,
            required: true,
        },
        deletedAt: {
            type: Date,
        }
    },
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
);

export default mongoose.model("shopSetting", ShopSetting);
