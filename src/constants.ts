export const shareExtensionName = 'ShareExtension';

export const shareExtensionInfoFileName = `${shareExtensionName}-Info.plist`;
export const shareExtensionEntitlementsFileName = `${shareExtensionName}.entitlements`;
export const shareExtensionStoryBoardFileName = 'MainInterface.storyboard';
export const shareExtensionViewControllerFileName = 'ShareViewController.swift';

export type Parameters = { activationRules?: { [key: string]: number | boolean | string}  }

export const getAppGroups = (identifier: string) => [`group.${identifier}`];

export const getShareExtensionBundledIdentifier = (appIdentifier: string) =>
  `${appIdentifier}.share-extension`;
