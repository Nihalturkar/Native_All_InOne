import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from "react-native-vector-icons/Feather"
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/actions/action';
import { COLORS, data } from '../../constants';
import Card from '../../component/Card';

const Home = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const { result, isLoading, isError } = useSelector(state => state.product || {});
    const drinks = result?.drinks || [];
    // console.log(drinks)

    if (isLoading) {
        return <Text style={styles.heading}>Loading...</Text>;
    }

    if (isError) {
        return <Text style={styles.heading}>Error fetching products</Text>;
    }

    const [Search, setSearch] = useState("");
    const handleSearch = () => {
        // navigation.navigate("Explore", { input: Search });
    }
    return (
        // <View style={styles.container}>
        //     <View style={styles.innercontainer}>
        //         <TouchableOpacity
        //             style={styles.InputBox}
        //             onPress={() => dispatch(fetchProducts())}
        //         >
        //             <Text style={styles.heading}>Get Details</Text>
        //         </TouchableOpacity>
        //         <View style={styles.getData}>
        //             {isLoading ? (
        //                 <Text>Loading...</Text>
        //             ) : isError ? (
        //                 <Text>Error fetching data</Text>
        //             ) : (
        //                 <FlatList
        //                     data={data}
        //                     renderItem={({ item }) => {
        //                         return (
        //                             <View style={{marginBottom:20}}>
        //                                 <Text>{item.id}</Text>
        //                                 <Text>
        //                                     {item.title}
        //                                 </Text>
        //                                 <Image source={{uri: item.image}} resizeMode='contain' style={{width:100,height:100}} />
        //                             </View>
        //                         )
        //                     }}
        //                     keyExtractor={item => item.id.toString()}
        //                 />
        //             )}
        //         </View>
        //     </View>
        // </View>

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.innercontainer}>
                    <View style={styles.bannerView}>
                        {drinks.length > 0 && (
                            <FlatList
                                data={drinks}
                                keyExtractor={(item) => item.idDrink} // Use idDrink as the unique key
                                renderItem={({ item }) =>
                                   <TouchableOpacity onPress={()=>navigation.navigate("Details",{drinks:item})}>
                                     <Image
                                        source={{ uri: item.strDrinkThumb }}
                                        style={styles.image}
                                        resizeMode='contain'
                                    />
                                   </TouchableOpacity>
                                }
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}
                            />
                        )}
                    </View>
                    <TouchableOpacity>
                        <View style={styles.InputBox}>
                            <Feather style={styles.icon} name="search" />
                            <TextInput
                                style={styles.input}
                                placeholder="Search Store"
                                placeholderTextColor={COLORS.gray50}
                                value={Search}
                                onChangeText={setSearch}
                                onSubmitEditing={handleSearch}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.cardView}>
                        <View style={styles.mainCardView}>
                            <Text style={styles.heading}>Categories</Text>
                            <TouchableOpacity><Text style={styles.greenText}>See all</Text></TouchableOpacity>
                        </View>
                        <View style={styles.cards}>

                            {drinks.length > 0 && (
                                <FlatList
                                    data={drinks}
                                    keyExtractor={(item) => item.idDrink} // Use idDrink as the unique key
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => {
                                        return (
                                            <Card
                                                imageSource={{uri: item.strDrinkThumb}}
                                                name={item.strDrink}
                                                // onPress={}
                                            />
                                        );
                                    }}
                                />
                            )}
                    </View>
                    </View>

                    <View style={styles.cardView}>
                        <View style={styles.mainCardView}>
                            <Text style={styles.heading}>All Drinks</Text>
                        </View>
                        <View style={styles.cards}>
                            <FlatList
                                data={data.Search || []}
                                numColumns={2}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return (
                                        <Card
                                            imageSource={item.img}
                                            name={item.name}
                                        />
                                    );
                                }}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>

        </View>
    );
};

export default Home;