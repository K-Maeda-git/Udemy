import React from "react";
import * as Font from "expo-font";

import { createIconSet } from "@expo/vector-icons";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import fontAwesome from "../../assets/fonts/fa-solid-900.ttf";

const CustomIcon = createIconSet(
  {
    pencile: "\uf304",
    plus: "\uf067",
    check: "\uf00c",
  },
  "FontAwesome",
);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    // フォントを読み込む
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    // 他で定義したスタイルを適用することができる
    // {}で囲うことでthis.propsの中のstyleというオブジェクトを指定して抜き出す
    // やっていることは「const style = this.props.style;」と一緒
    const { name, style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    // 渡ってきたcolorが"white"であれば色を変更する
    if (color === "white") {
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        {/* // 配列として定義したスタイルを渡すことで上書きする */}
        <View
          style={[styles.circleButton, { backgroundColor: bgColor }]}
        >
          {this.state.fontLoaded ? (
            <CustomIcon
              name={name}
              style={[styles.circleButtonTitle, { color: textColor }]}
            />
            //  親から渡ってきた要素を表示する
            //  {this.props.children}
          ) : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    // margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // elevation: 4,
  },
  circleButtonTitle: {
    // color: "#fff",
    fontSize: 24,
    // テキストを中央に配置するときはfontSizeとloneHeightを同じ値に設定する
    lineHeight: 32,
  },
});

export default CircleButton;
