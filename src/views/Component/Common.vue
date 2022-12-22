<template>
  <el-alert
    type="info"
    :closable="false"
  >
    <template #title>
      <span class="text-[18px]">基础组件</span>
    </template>
    <template #default>
      <span class="text-[14px]">基础组件依赖于 <a
        href="https://element-plus.gitee.io/"
        target="_blank"
      >element-plus</a>，组件库已有的基础组件，项目中不会再次进行demo展示（二次封装组件除外）</span>
    </template>
  </el-alert>
  <el-row
    class="mt-4"
    :gutter="20"
  >
    <el-col :span="12">
      <el-card>
        <template #header>
          <span>BasicButton Color</span>
        </template>
        <div class="mb-2">
          <div>success</div>
          <div class="py-2">
            <el-button type="success">
              成功
            </el-button>
            <el-button
              type="success"
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="success"
              loading
            >
              loading
            </el-button>
            <el-button
              type="success"
              link
            >
              link
            </el-button>
            <el-button
              type="success"
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>warning</div>
          <div class="py-2">
            <el-button type="warning">
              警告
            </el-button>
            <el-button
              type="warning"
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="warning"
              loading
            >
              loading
            </el-button>
            <el-button
              type="warning"
              link
            >
              link
            </el-button>
            <el-button
              type="warning"
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>danger</div>
          <div class="py-2">
            <el-button type="danger">
              危险
            </el-button>
            <el-button
              type="danger"
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="danger"
              loading
            >
              loading
            </el-button>
            <el-button
              type="danger"
              link
            >
              link
            </el-button>
            <el-button
              type="danger"
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>plain</div>
          <div class="py-2">
            <el-button
              type="success"
              plain
            >
              成功
            </el-button>
            <el-button
              type="warning"
              plain
            >
              警告
            </el-button>
            <el-button
              type="danger"
              plain
            >
              危险
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <template #header>
          <span>BasicButton Types</span>
        </template>
        <div class="mb-2">
          <div>primary</div>
          <div class="py-2">
            <el-button type="primary">
              主要
            </el-button>
            <el-button
              type="primary"
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="primary"
              loading
            >
              loading
            </el-button>
            <el-button
              type="primary"
              link
            >
              link
            </el-button>
            <el-button
              type="primary"
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>default</div>
          <div class="py-2">
            <el-button>
              默认
            </el-button>
            <el-button
              disabled
            >
              禁用
            </el-button>
            <el-button
              loading
            >
              loading
            </el-button>
            <el-button
              link
            >
              link
            </el-button>
            <el-button
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>info</div>
          <div class="py-2">
            <el-button type="info">
              信息
            </el-button>
            <el-button
              type="info"
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="info"
              loading
            >
              loading
            </el-button>
            <el-button
              type="info"
              link
            >
              link
            </el-button>
            <el-button
              type="info"
              disabled
              link
            >
              disabled link
            </el-button>
          </div>
        </div>
        <div class="mb-2">
          <div>plain</div>
          <div class="py-2">
            <el-button
              type="primary"
              plain
            >
              主要
            </el-button>
            <el-button
              plain
            >
              默认
            </el-button>
            <el-button
              plain
              disabled
            >
              禁用
            </el-button>
            <el-button
              type="primary"
              plain
              loading
            >
              loading
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
