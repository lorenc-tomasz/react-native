# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

include(${REACT_COMMON_DIR}/cmake-utils/react-native-flags.cmake)

file(GLOB rrc_scrollview_SRC CONFIGURE_DEPENDS *.cpp platform/android/react/renderer/components/scrollview/*.cpp)
add_library(rrc_scrollview STATIC ${rrc_scrollview_SRC})

target_include_directories(rrc_scrollview PUBLIC ${REACT_COMMON_DIR} . ${CMAKE_CURRENT_SOURCE_DIR}/platform/android/)

target_include_directories(rrc_scrollview PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}/platform/android/react/renderer/components/scrollview/)

target_link_libraries(rrc_scrollview
        glog
        folly_runtime
        glog_init
        jsi
        react_debug
        react_renderer_core
        react_renderer_debug
        react_renderer_graphics
        react_renderer_mapbuffer
        rrc_view
        yoga
)
target_compile_reactnative_options(rrc_scrollview PRIVATE "Fabric")
target_compile_options(rrc_scrollview PRIVATE -Wpedantic)
