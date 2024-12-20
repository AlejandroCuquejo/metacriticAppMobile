import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGameCard from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import { CircleInfoIcon } from "./Icons";

import { styled } from "nativewind"
import { Screen } from "./Screen";

const StylePresable = styled(Pressable);

export function Main() {
    const [games, setGames] = useState([]);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        getLatestGames().then((games) => {
            setGames(games);
        });
    }, []);

    return (
        <>
            <Screen >
                {games.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator color={"#fff"} size={"large"} />
                    </View>
                ) : (
                    <FlatList
                        data={games}
                        keyExtractor={(game) => game.id}
                        renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
                    />
                )}
            </Screen>
        </>
    );
}

