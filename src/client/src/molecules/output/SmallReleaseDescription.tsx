import React, { useState } from 'react';
import ReactMarkdown, {
  MarkdownAbstractSyntaxTree,
  NodeType,
} from 'react-markdown';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';

import { Body1 } from '@atoms/text/Body1';
import { Body2 } from '@atoms/text/Body2';
import { H6 } from '@atoms/text/H6';

const containerHeight = 50;

const S = Object.freeze({
  __proto__: null,
  SmallReleaseDescription: styled.div`
    width: 311px;
    height: ${containerHeight}px;
    display: inline-block;
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
  EllipsisContainer: styled.div`
    line-height: 0.5;

    p {
      line-height: 0;
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
}) => {
  const [showEllipsis, setShowEllipsis] = useState(false);
  const handleResize = (_width: number, height: number) => {
    if (height > containerHeight) {
      setShowEllipsis(true);
    } else {
      setShowEllipsis(false);
    }
  };

  return (
    <>
      <S.SmallReleaseDescription>
        <S.Markdown
          source={releaseDescriptionMarkdown}
          renderers={{
            text: Body2,
            heading: H6,
          }}
          allowNode={allowNodesOtherThanTitle}
        />
        <ReactResizeDetector
          handleWidth={true}
          handleHeight={true}
          onResize={handleResize}
          querySelector="[class^=SmallReleaseDescription__Markdown]"
        />
      </S.SmallReleaseDescription>
      {showEllipsis ? (
        <S.EllipsisContainer>
          <Body1>…</Body1>
        </S.EllipsisContainer>
      ) : (
        <></>
      )}
    </>
  );
};
