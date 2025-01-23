import React, { ReactNode, useRef } from "react";
import { Animated } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export const SwipeableView = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const translationX = useRef(new Animated.Value(0)).current;

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translationX.setValue(event.translationX);
    })
    .onEnd(() => {
      // use spring animation to prevent box from quickly snapping back after gesture
      Animated.spring(translationX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        className={className}
        style={[
          {
            transform: [{ translateX: translationX }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default SwipeableView;
