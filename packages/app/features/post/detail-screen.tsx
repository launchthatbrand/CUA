import { Button, Paragraph, YStack } from "@my/ui";
import { ChevronLeft } from "@tamagui/lucide-icons";
import React from "react";
import { createParam } from "solito";
import { useLink } from "solito/link";
import { trpc } from "../../utils/trpc";

type Parameters = {
  id: string | null;
};

const { useParam } = createParam<Parameters>();

export function PostDetailScreen() {
  const [id, setId] = useParam("id");
  const linkProps = useLink({ href: "/" });

  const intId = parseInt(id!);

  const { data, isLoading } = trpc.post.getById.useQuery({
    id: intId,
  });
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>404</div>;

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
