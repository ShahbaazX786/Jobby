//dynamic route
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, RefreshControlComponent } from 'react-native';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import useFetch from '../../hooks/useFetch';
import { COLORS, SIZES, icons } from '../../constants';

const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();
    const tabs = ["About", "Qualifications", "Responsibilities"];
    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    });
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const onRefresh = () => {

    }

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%" />
                    ),
                    headerTitle: ''
                }}
            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControlComponent
                            refreshing={refreshing}
                            onRefresh={onRefresh} />
                    }>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something Went Wrong!</Text>
                    ) : data.length === 0 ? (
                        <Text>No Data Found.</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                            companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_country}
                            />
                            <JobTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab} />
                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default JobDetails;
