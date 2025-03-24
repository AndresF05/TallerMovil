import React from 'react';
import { ScrollView, Image, View } from 'react-native';

const ImageScreen = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image source={{ uri: 'https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000' }} style={{ width: 300, height: 200, margin: 10 }} />
        <Image source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/547A/production/_96462612_gettyimages-659596036.jpg.webp' }} style={{ width: 300, height: 200, margin: 10 }} />
        <Image source={{ uri: 'https://www.marketingregistrado.com/fotos/externas/vienen-semifinales-champions-league-real-madrid-futbolistas-valiosos-1714388895-0.webp' }} style={{ width: 300, height: 200, margin: 10 }} />
        <Image source={{ uri: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_3209,h_1805,x_0,y_117/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_es_international_web/01j3fr5ajzmsmvr2c0xk.jpg' }} style={{ width: 300, height: 200, margin: 10 }} />
        <Image source={{ uri: 'https://album.mediaset.es/eimg/2022/06/19/cual-es-la-media-de-edad-a-la-que-se-retira-un-futbolista_cd51.jpg' }} style={{ width: 300, height: 200 , margin: 10 }} />
        <Image source={{ uri: 'https://images.ecestaticos.com/kjg8OzAEoc8qY10QAysTw4de36g=/183x29:2109x1473/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F119%2Fb8f%2F4c3%2F119b8f4c3fd95906b219492aafbfe712.jpg' }} style={{ width: 300, height: 200, margin: 10 }} />
      </View>
    </ScrollView>
  );
};

export default ImageScreen;