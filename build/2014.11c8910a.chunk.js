"use strict";(self.webpackChunkecs_solutions=self.webpackChunkecs_solutions||[]).push([[2014],{22014:(K,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var P=_(92132),a=_(87184),n=_(5041),A=_(21272),C=_(55506),R=_(14718),l=_(58330),U=_(72810),v=_(18022),B=_(88977),t=_(15126),i=_(63299),L=_(67014),I=_(59080),d=_(79275),o=_(82437),T=_(2506),O=_(5790),E=_(12083),M=_(35223),W=_(5409),D=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),N=_(77965),j=_(54257),H=_(71210),V=_(51187),Z=_(39404),x=_(58692),F=_(501),$=_(57646),c=_(23120),G=_(44414),e=_(25962),z=_(14664),X=_(42588),Y=_(90325),J=_(62785),Q=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),o_=_(43530),O_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(a.HomePageCE,{}))},5041:(K,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),a=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(88977);const l="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:I}=(0,R.m)(),d=(0,a.hN)(),{pathname:o}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:O,licenseLimitStatus:E,isHostedOnStrapiCloud:M}=i??{};P.useEffect(()=>{if(L||I)return;const W=!n(O)&&!window.sessionStorage.getItem(`${l}-${o}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let D;E==="OVER_LIMIT"?D="warning":E==="AT_LIMIT"&&(D="softWarning"),W&&d({type:D,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:O}),link:{url:M?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:M})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${o}`,"true")}})},[d,i,o,t,I,O,E,T,M,L])}}}]);
