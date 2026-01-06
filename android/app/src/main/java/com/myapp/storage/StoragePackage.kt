// android/app/src/main/java/com/myapp/storage/StoragePackage.kt

package com.myapp.storage

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class StoragePackage : TurboReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == StorageModule.NAME) {
            StorageModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                StorageModule.NAME to ReactModuleInfo(
                    StorageModule.NAME,
                    StorageModule.NAME,
                    false,  // canOverrideExistingModule
                    false,  // needsEagerInit
                    true,   // hasConstants
                    false,  // isCxxModule
                    true    // isTurboModule
                )
            )
        }
    }
}
