import twilio from "twilio";
const accountsId = "AC211e3d35d4ee89dca8943601ee2de909";
const authToken = "bdd1ee6dd764a38419d27930a2be4327";
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
    from: "+573113581555",
    to: toPhoneNumber.trim(),
  });
  console.log(response);
  return response;
};
