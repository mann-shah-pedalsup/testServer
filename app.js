const { TwitterApi } = require('twitter-api-v2');

// Instantiate with desired auth type (here's Bearer v2 auth)
const client = new TwitterApi({
    appKey: "rnLJkYicpOut0jPt7HuuePrJ3",
    appSecret: "pGFrymmiiiZv9llTTQlEqqI0a3cTputUHRRgfu458I1LO75zYI",
    accessToken: "1738479219649413121-MDHxUx99ULivcZQXJk5fASSRFD0NVr",
    accessSecret: "huG7f9UCGZYi1FZf4p6l3Dt8lN9FggVF5b3gJ0dEec1El",
  });

// Tell typescript it's a readonly app
// const readOnlyClient = twitterClient.readOnly;
const sendMsg = async () => {
    // const data = await client.v2.sendDmToParticipant('1661988912347381760', {
    //     text: 'Hello! 123',
    //     // attachments: [{ media_id: '123' }],
    // })
 
    // console.log(data); 
    /* data got in {
        data: {
          dm_conversation_id: '1661988912347381760-1738479219649413121',
          dm_event_id: '1750502142794924482'
        }
      }
      */

    //get a list of messages for specific user
    const eventTimeline = await client.v2.listDmEventsWithParticipant('1661988912347381760')
    console.log("eventTimeline",eventTimeline);
    console.log(eventTimeline.events)
    /* 
    [
  {
    event_type: 'MessageCreate',
    id: '1750503364360827183',
    text: 'Hello! 123'
  },
  {
    event_type: 'MessageCreate',
    id: '1750502142794924482',
    text: 'Hello!'
  },
  {
    event_type: 'MessageCreate',
    id: '1750501936074551349',
    text: 'Hello!'
  }
]
*/
}

sendMsg();
