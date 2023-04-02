import type { PropsWithChildren } from "react";
import { XStack, YStack, ZStack } from "@my/ui";
import Sidebar from "@my/ui/src/components/Sidebar/Sidebar";

export const PageLayout = (props: PropsWithChildren<unknown>) => {
  return (
    <>
      <XStack backgroundColor={"$green10Light"}>
        <Sidebar />

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
