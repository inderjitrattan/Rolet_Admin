import { ConcatDynamicProductKeys } from "../../../../utils/customFunctions/ConcatDynamicProductKeys";

const ParallaxHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(
    new Set(ConcatDynamicProductKeys(values))
  );

  values["content"]["parallax_banner"]["banners"].forEach((elem, i) => {
    if (values[`parallaxBannerImage${i}`]) {
      values["content"]["parallax_banner"]["banners"][i]["image_url"] = values[
        `parallaxBannerImage${i}`
      ].hasOwnProperty("asset_url")
        ? values[`parallaxBannerImage${i}`].asset_url
        : values[`parallaxBannerImage${i}`].original_url;
    } else {
      values["content"]["parallax_banner"]["banners"][i]["image_url"] = "";
    }
  });

  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(ConcatDynamicProductKeys(values))),
    },
  };

  mutate(updatedValues);
};
export default ParallaxHomePageSubmit;
