import { serverAxios } from ".";

const PREFIX_URL = "/s3";

export const postCertifiedImg = async (
  formData: FormData,
  accessToken: string | null,
  dir: string,
): Promise<void | null> => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/image/${dir}`, formData, {
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "multipart/form-data" },
    });
    if (data.status === 200) {
      return data.data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to post image");
  }
};
