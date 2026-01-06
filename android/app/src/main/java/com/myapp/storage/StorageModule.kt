package com.myapp.storage

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.Arguments
import com.myapp.specs.NativeStorageSpec

class StorageModule(reactContext: ReactApplicationContext) : NativeStorageSpec(reactContext) {

    companion object {
        const val NAME = "Storage"
    }

    private val prefs: SharedPreferences =
        reactContext.getSharedPreferences("app_storage", Context.MODE_PRIVATE)

    override fun getName(): String = NAME

    // String
    override fun getString(key: String): String? {
        return prefs.getString(key, null)
    }

    override fun setString(key: String, value: String): Boolean {
        return prefs.edit().putString(key, value).commit()
    }

    // Number
    override fun getNumber(key: String): Double? {
        return if (prefs.contains(key)) {
            prefs.getFloat(key, 0f).toDouble()
        } else {
            null
        }
    }

    override fun setNumber(key: String, value: Double): Boolean {
        return prefs.edit().putFloat(key, value.toFloat()).commit()
    }

    // Boolean
    override fun getBoolean(key: String): Boolean? {
        return if (prefs.contains(key)) {
            prefs.getBoolean(key, false)
        } else {
            null
        }
    }

    override fun setBoolean(key: String, value: Boolean): Boolean {
        return prefs.edit().putBoolean(key, value).commit()
    }

    // Utils
    override fun delete(key: String): Boolean {
        return prefs.edit().remove(key).commit()
    }

    override fun clearAll(): Boolean {
        return prefs.edit().clear().commit()
    }

    override fun contains(key: String): Boolean {
        return prefs.contains(key)
    }

    // Исправлено: возвращаем WritableArray вместо Array<String>
    override fun getAllKeys(): WritableArray {
        val array = Arguments.createArray()
        prefs.all.keys.forEach { key ->
            array.pushString(key)
        }
        return array
    }
}
