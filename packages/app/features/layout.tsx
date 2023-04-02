import type { PropsWithChildren } from "react";
import { XStack, YStack, ZStack } from "@my/ui";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <XStack backgroundColor={"$green10Light"}>
        <YStack
          className={"left-nav"}
          backgroundColor={"$pink8Dark"}
          flexBasis="20%"
        >
          <YStack bc="$color" br="$3" p="$2" />
          <YStack bc="$color" br="$3" p="$2" />
          <YStack bc="$color" br="$3" p="$2" />
        </YStack>

        <YStack className={"right-content"} flexBasis="80%">
          <XStack backgroundColor={"$blue10Dark"}>
            <YStack bc="$color" br="$3" p="$2" />
            <YStack bc="$color" br="$3" p="$2" />
            <YStack bc="$color" br="$3" p="$2" />
          </XStack>
          {props.children}
        </YStack>
      </XStack>
    </>
  );
};
