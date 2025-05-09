/**
 * Copyright (c) Expo.
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
import StyleSheet from 'react-native-web/dist/exports/StyleSheet';
import TextAncestorContext from 'react-native-web/dist/exports/Text/TextAncestorContext';
import { ViewProps } from 'react-native-web/dist/exports/View/types';
import createElement from 'react-native-web/dist/exports/createElement';
import * as forwardedProps from 'react-native-web/dist/modules/forwardedProps';
import pick from 'react-native-web/dist/modules/pick';
import useElementLayout from 'react-native-web/dist/modules/useElementLayout';
import { useLocaleContext, getLocaleDirection } from 'react-native-web/dist/modules/useLocale';
import useMergeRefs from 'react-native-web/dist/modules/useMergeRefs';
import usePlatformMethods from 'react-native-web/dist/modules/usePlatformMethods';
import useResponderEvents from 'react-native-web/dist/modules/useResponderEvents';

const forwardPropsList = Object.assign(
  {},
  forwardedProps.defaultProps,
  forwardedProps.accessibilityProps,
  forwardedProps.clickProps,
  forwardedProps.defaultProps,
  forwardedProps.accessibilityProps,
  forwardedProps.clickProps,
  forwardedProps.focusProps,
  forwardedProps.keyboardProps,
  forwardedProps.mouseProps,
  forwardedProps.touchProps,
  forwardedProps.styleProps,
  {
    href: true,
    lang: true,
    onScroll: true,
    onWheel: true,
    pointerEvents: true,
  }
);

function pickProps(props: React.ComponentProps<any>) {
  return pick(props, forwardPropsList);
}

/**
 * This is the View from react-native-web copied out in order to supply a custom `__element` property.
 * In the past, you could use `createElement` to create an element with a custom HTML element, but this changed
 * somewhere between 0.14...0.17.
 */

function View(props: ViewProps) {
  const {
    __element,
    hrefAttrs,
    onLayout,
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
    ref: forwardedRef,
    ...rest
  } = props as any;

  // if (process.env.NODE_ENV !== 'production') {
  //   React.Children.toArray(props.children).forEach((item) => {
  //     if (typeof item === 'string') {
  //       console.error(`Unexpected text node: ${item}. A text node cannot be a child of a <View>.`);
  //     }
  //   });
  // }

  const hasTextAncestor = React.use(TextAncestorContext);
  const hostRef = React.useRef(null);
  const { direction: contextDirection } = useLocaleContext();

  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture,
  });

  let component = __element ?? 'div';

  const langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  const componentDirection = props.dir || langDirection;
  const writingDirection = componentDirection || contextDirection;

  const supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      const { download, rel, target } = hrefAttrs;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }

  const platformMethodsRef = usePlatformMethods(supportedProps);
  const setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);

  return createElement(
    component,
    {
      ...supportedProps,
      ref: setRef,
    },
    // @ts-expect-error TODO(cedric): 'writingDirection' does not exist in type 'ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>'
    { writingDirection }
  );
}

if (__DEV__) {
  View.displayName = 'View';
}

const styles = StyleSheet.create({
  view$raw: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    listStyle: 'none',
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    zIndex: 0,
  },
  inline: {
    display: 'inline-flex',
  },
});

export default View;
