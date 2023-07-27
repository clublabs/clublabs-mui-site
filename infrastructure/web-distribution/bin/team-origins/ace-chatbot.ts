import { AccountIds } from '@clublabs/account-profiles';
import { EnvironmentValue, TeamValue } from '@clublabs/aws-tags';
import { IOrigins, TeamOrigins } from '../origins';

export const aceChatbotOrigins: TeamOrigins = {
  team: TeamValue.AceChatbot,
  origins: [
    {
      behaviorPathPattern: 'acegenesysclient*',
      s3OriginPath: '/acegenesysclient',
      bucketPrefix: 'ace-chatbot-web',
      accountDetails: AccountIds.chatbot
    },
    {
      behaviorPathPattern: 'aceipsoftclient*',
      s3OriginPath: '/aceipsoftclient',
      bucketPrefix: 'ace-ipsoft-client-web',
      accountDetails: AccountIds.chatbot
    },
    {
      behaviorPathPattern: 'acechatbot*',
      s3OriginPath: '/acechatbot',
      bucketPrefix: 'ace-chatbot-web',
      accountDetails: AccountIds.chatbot
    }
    // { //ONLY IN INTERNAL domain not public
    //   [EnvironmentValue.Dev]: {
    //     behaviors: [{
    //       behaviorPathPattern: 'ace-agent-chat/*',
    //       s3OriginPath: '/ace-agent-chat',
    //     }],
    //     bucketAccountId: '516820097498',
    //     bucketName: 'ace-chatbot-web-sandbox-us-west-2'
    //   },
    // }
  ]
};
