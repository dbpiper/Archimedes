import React from 'react';
import ReactMarkdown, {
  MarkdownAbstractSyntaxTree,
  NodeType,
} from 'react-markdown';
import styled from 'styled-components';

import { Body2 } from '@atoms/text/Body2';
import { H6 } from '@atoms/text/H6';

const S = Object.freeze({
  __proto__: null,
  SmallReleaseDescription: styled.div`
    width: 311px;
    height: 46px;
    display: block;
    overflow-y: hidden;
  `,
  Markdown: styled(ReactMarkdown)`
    margin: 0;

    h6 {
      margin: 0;
    }

    ul {
      margin: 0;
    }
  `,
});

const allowNodesOtherThanTitle = (
  node: MarkdownAbstractSyntaxTree,
  index: number,
  _parent: NodeType,
) => {
  // remove the title as it is redundant with how we've designed the app return false;
  if (node.type === 'heading' && index === 0) {
    return false;
  }

  return true;
};

export const SmallReleaseDescription = ({
  releaseDescriptionMarkdown,
}: {
  releaseDescriptionMarkdown: string;
}) => (
  <S.SmallReleaseDescription>
    <S.Markdown
      source={releaseDescriptionMarkdown}
      renderers={{
        text: Body2,
        heading: H6,
      }}
      allowNode={allowNodesOtherThanTitle}
    />
  </S.SmallReleaseDescription>
);
