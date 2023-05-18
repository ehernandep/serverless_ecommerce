import twilio from "twilio";
const accountsId = "AC211e3d35d4ee89dca8943601ee2de909";
const authToken = "08489e36116f872227aa5e3756bbd98a";
const client = twilio(accountsId, authToken);
export const GenerateAccessCode = () => {
  const code = Math.floor(10000 + Math.random() * 900000);
  let expiry = new Date();
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { code, expiry };
};
export const SendVerificationCode = async (
  code: number,
  toPhoneNumber: string
) => {
  const response = await client.messages.create({
    body: `your verification code is ${code}`,
    from: "+12526508673",
    to: "+573005179586",
  });
  console.log(response);
  return response;
};
