import { Button, Paragraph, YStack } from "@my/ui";
import { ChevronLeft } from "@tamagui/lucide-icons";
import { useState } from "react";
import { createParam } from "solito";
import { useLink } from "solito/link";
import { trpc } from "../../utils/trpc";

type Parameters = {
  id: string | null;
};

const { useParam } = createParam<Parameters>();

export function PostDetailScreen() {
  //TODO: vercel deployment failing because query param is not loading before trpc query
  const [id, setId] = useState(1);
  const linkProps = useLink({ href: "/" });

  //const intId = parseInt(id!);

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
