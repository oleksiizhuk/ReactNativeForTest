//
//  RCTNativeStorage.mm
//  MyApp
//
//  Created by Oleksii Zhuk1 on 06.01.2026.
//

#import "RCTNativeStorage.h"
#import <React/RCTBridgeModule.h>

@implementation RCTNativeStorage

RCT_EXPORT_MODULE(Storage)

- (NSUserDefaults *)defaults {
    return [NSUserDefaults standardUserDefaults];
}

- (NSString *)getString:(NSString *)key {
    return [[self defaults] stringForKey:key];
}

- (NSNumber *)setString:(NSString *)key value:(NSString *)value {
    [[self defaults] setObject:value forKey:key];
    [[self defaults] synchronize];
    return @YES;
}

- (NSNumber *)getNumber:(NSString *)key {
    if (![[self defaults] objectForKey:key]) return nil;
    return @([[self defaults] doubleForKey:key]);
}

- (NSNumber *)setNumber:(NSString *)key value:(double)value {
    [[self defaults] setDouble:value forKey:key];
    [[self defaults] synchronize];
    return @YES;
}

- (NSNumber *)getBoolean:(NSString *)key {
    if (![[self defaults] objectForKey:key]) return nil;
    return @([[self defaults] boolForKey:key]);
}

- (NSNumber *)setBoolean:(NSString *)key value:(BOOL)value {
    [[self defaults] setBool:value forKey:key];
    [[self defaults] synchronize];
    return @YES;
}

- (NSNumber *)delete:(NSString *)key {
    [[self defaults] removeObjectForKey:key];
    [[self defaults] synchronize];
    return @YES;
}

- (NSNumber *)clearAll {
    NSString *appDomain = [[NSBundle mainBundle] bundleIdentifier];
    [[self defaults] removePersistentDomainForName:appDomain];
    [[self defaults] synchronize];
    return @YES;
}

- (NSNumber *)contains:(NSString *)key {
    return @([[self defaults] objectForKey:key] != nil);
}

- (NSArray<NSString *> *)getAllKeys {
    return [[[self defaults] dictionaryRepresentation] allKeys];
}

// TurboModule setup
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeStorageSpecJSI>(params);
}

@end
