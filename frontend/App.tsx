import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
} from "victory-native";

/* For testing on web only */
// import {
//   VictoryAxis,
//   VictoryBar,
//   VictoryChart,
//   VictoryStack,
// } from "victory";

const stacks = dummyData();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App Time Analytics</Text>
      <VictoryChart width={350}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryStack>
          <VictoryBar data={stacks.one} />
          <VictoryBar data={stacks.two} />
          <VictoryBar data={stacks.three} />
        </VictoryStack>
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function dummyData() {
  return {
    one: [
      {
        x: 0,
        y: 10,
      },
      {
        x: 1,
        y: 9.347050368379714,
      },
      {
        x: 2,
        y: 8.445270864042635,
      },
      {
        x: 3,
        y: 8.698694481556405,
      },
      {
        x: 4,
        y: 10.635280868424868,
      },
      {
        x: 5,
        y: 12.014410631483253,
      },
      {
        x: 6,
        y: 9.642516825196937,
      },
      {
        x: 7,
        y: 9.205934753839863,
      },
      {
        x: 8,
        y: 8.168738637567117,
      },
    ],
    two: [
      {
        x: 0,
        y: 10,
      },
      {
        x: 1,
        y: 9.827848225379235,
      },
      {
        x: 2,
        y: 10.812062770448428,
      },
      {
        x: 3,
        y: 8.958886116287438,
      },
      {
        x: 4,
        y: 7.6954395121394885,
      },
      {
        x: 5,
        y: 6.921126167141697,
      },
      {
        x: 6,
        y: 7.25154133419698,
      },
      {
        x: 7,
        y: 6.6132025124695515,
      },
      {
        x: 8,
        y: 5.245180474190602,
      },
    ],
    three: [
      {
        x: 0,
        y: 10,
      },
      {
        x: 1,
        y: 11.250389213454003,
      },
      {
        x: 2,
        y: 10.966345828757497,
      },
      {
        x: 3,
        y: 9.460511214467768,
      },
      {
        x: 4,
        y: 10.824770183160844,
      },
      {
        x: 5,
        y: 8.77451734074149,
      },
      {
        x: 6,
        y: 9.686436020464527,
      },
      {
        x: 7,
        y: 10.584412364011056,
      },
      {
        x: 8,
        y: 9.491460139532741,
      },
    ],
  };
}
