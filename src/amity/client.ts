import { Client, API_REGIONS } from '@amityco/ts-sdk';

let amity = async () => {
   try {
    const sessionHandler: Amity.SessionHandler = {
      sessionWillRenewAccessToken(renewal: Amity.AccessTokenRenewal) {
        renewal.renew();
      }
    }

    const client: Amity.Client = Client.createClient("", API_REGIONS.US);
    console.log("client login",sessionHandler)
    let isConnected = await client.mqtt.connect({ userId: "umar", sessionHandler })
    console.log(isConnected)
    console.log(client)
  }
  catch (err) {
    console.log(err)
  }
}
// export default amity
