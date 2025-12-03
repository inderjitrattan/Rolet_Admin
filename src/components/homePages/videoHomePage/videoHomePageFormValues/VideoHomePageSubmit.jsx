import { ConcatDynamicProductKeys } from "../../../../utils/customFunctions/ConcatDynamicProductKeys";

const VideoHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(
    new Set(ConcatDynamicProductKeys(values))
  );
  if (values["videoFile"]) {
    values["content"]["video"]["video_url"] = values[
      `videoFile`
    ].hasOwnProperty("asset_url")
      ? values[`videoFile`].asset_url
      : values[`videoFile`].original_url;
  } else values["content"]["video"]["video_url"] = "";

  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(ConcatDynamicProductKeys(values))),
    },
  };

  mutate(updatedValues);
};
export default VideoHomePageSubmit;
