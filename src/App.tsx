import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import {
  Banner,
} from 'react-native-ad-manager';


const App = ()=>{
    // const TEST_AD_NATIVE = '/6499/example/native';
    // const TEST_AD_INTERSTITIAL = '/6499/example/interstitial';
    const TEST_AD_BANNER = '/6499/example/banner';
    // const TEST_AD_BANNER_FLUID = '/6499/example/APIDemo/Fluid';
    // const TEST_AD_BANNER_ADAPTIVE = '/30497360/adaptive_banner_test_iu/backfill'; // '/30497360/adaptive_banner_test_iu/reservation'
    // const TEST_AD_TEMPLATE = '/6499/example/native';
    // const TEST_AD_TEMPLATE_ID = '10104090';

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Banner Ad Below</Text>
                    <Banner
                    onAdFailedToLoad={(error)=>{console.error('banner ad failded to load',error)}}
                    onAdLoaded={()=>{console.log('banner ad loaded')}}
                    adSize="mediumRectangle"
                    validAdSizes={['mediumRectangle']}
                    adUnitID={TEST_AD_BANNER}
                    targeting={{
                        customTargeting: { group: 'nzme_user_test' },
                        categoryExclusions: ['media'],
                        contentURL: 'nzmetest://',
                        publisherProvidedID: 'provider_id_nzme',
                    }}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default App