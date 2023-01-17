import { serverAxios } from ".";

const PREFIX_URL = "/s3";

export const postCertifiedImg = async (
  recommenderData: string,
  accessToken: string | null,
  dir: string,
): Promise<void | null> => {
  const { data } = await serverAxios.post(`${PREFIX_URL}/image/${dir}`, recommenderData, {
    headers: { Authorization: `${accessToken}`, "Content-Type": "multipart/form-data" },
  });
  try {
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    if (data.status === 400) {
      return data.message;
    }
    throw new Error("Failed to post image");
  }
};
