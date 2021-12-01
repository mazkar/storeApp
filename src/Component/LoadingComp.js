import React from 'react';
import {View, Text} from 'react-native';
import {ms} from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function LoadingComp() {
  return (
    <SkeletonPlaceholder speed={1000} backgroundColor="#202020">
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        marginTop={36}>
        <SkeletonPlaceholder.Item
          width={104}
          height={32}
          borderRadius={6}
          marginLeft={16}
        />
        <SkeletonPlaceholder.Item
          width={104}
          height={32}
          borderRadius={6}
          marginLeft={16}
        />
        <SkeletonPlaceholder.Item
          width={104}
          height={32}
          borderRadius={6}
          marginLeft={16}
        />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item marginTop={ms(36)}>
        <SkeletonPlaceholder.Item
          width={ms(204)}
          height={ms(32)}
          borderRadius={ms(6)}
          marginLeft={ms(16)}
        />
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item
            height={330}
            width={220}
            marginTop={ms(32)}
            marginLeft={ms(16)}
            borderRadius={ms(8)}
          />
          <SkeletonPlaceholder.Item
            height={330}
            width={220}
            marginTop={ms(32)}
            marginLeft={ms(16)}
            borderRadius={ms(8)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item marginTop={ms(32)}>
        <SkeletonPlaceholder.Item
          width={ms(170)}
          height={ms(32)}
          borderRadius={ms(6)}
          marginLeft={ms(16)}
        />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          height={330}
          width={360}
          marginTop={ms(32)}
          marginLeft={ms(16)}
          borderRadius={ms(8)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
