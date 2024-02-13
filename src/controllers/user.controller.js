import { asyncHandler } from "../utils/asyncHandler.js"

const regiseterUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message: "ok u reached me !!"
    })
})

export { regiseterUser }
