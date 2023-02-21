import { serverAxios } from ".";

const PREFIX_URL = "/s3";

export async function postCertifiedImg(
  formData: FormData,
  accessToken: string | null,
  dir: string,
  onSuccess: (userData: string) => void,
  onFail: (errorMessage: string) => void,
): Promise<void | null> {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/image/${dir}`, formData, {
      headers: { Authorization: `${accessToken}`, "Content-Type": "multipart/form-data" },
    });
    onSuccess(data.data[0]);
  } catch (err) {
    if (err instanceof Error) {
      onFail(err.message);
    }
  }
}
