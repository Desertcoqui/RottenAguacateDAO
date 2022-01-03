import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x00B3483C9419D0146D96992Dd39109A45a13298e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Rotten Aguacate",
        description: "Here is your very own Rotten Aguacate, you are now a member",
        image: readFileSync("scripts/assets/avo2.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()