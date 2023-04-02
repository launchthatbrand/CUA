import { Button, Paragraph, YStack } from "@my/ui";
import { ChevronLeft } from "@tamagui/lucide-icons";
import React from "react";
import { createParam } from "solito";
import { useLink } from "solito/link";
import { trpc } from "../../utils/trpc";

type Parameters = {
  id: number;
};

const { useParam } = createParam<Parameters>();

export function PostDetailScreen() {
  const [id, setId] = useParam("id", {
    parse(value) {
      return Number(value);
    },
    initial: 0,
  });
  const linkProps = useLink({ href: "/" });

  const { data, isLoading, error } = trpc.post.getById.useQuery({
    id,
  });

  if (isLoading) {
    return <Paragraph>Loading...</Paragraph>;
  }

  if (error) {
    return <Paragraph>{error.message}</Paragraph>;
  }

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">{`Post ID: ${id}`}</Paragraph>
      <Paragraph
        ta="center"
        fow="800"
      >{`Post Name: ${data.post_name}`}</Paragraph>
      <Paragraph
        ta="center"
        fow="800"
      >{`Post Date: ${data.post_date}`}</Paragraph>
      <Button {...linkProps} icon={ChevronLeft} theme="gray">
        Go Home
      </Button>
    </YStack>
  );
}
