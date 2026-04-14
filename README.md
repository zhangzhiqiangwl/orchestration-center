<!--
!/usr/bin/env python3
Copyright (c) 2026 Huawei Technologies Co., Ltd.
All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License"); you may
   not use this file except in compliance with the License. You may obtain
   a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
   WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
   License for the specific language governing permissions and limitations
   under the License.
-->


# A2A-T 多智能体编排中心

## 项目简介

编排中心是一个用于编排多个 Agent（智能体）协作的 Web 平台。用户在可视化工作流设计器中编排 Agent 之间的调用关系和流程图，后端 Python 框架负责解析流程、执行编排逻辑并驱动 Agent 协同工作。

## 快速开始

### 环境要求
- Node.js 20.19
- Python 3.10+

### 启动和停止服务
1. **启动后端服务**

    **进入项目目录下的`bin`文件夹**
    ```bash
      cd /yourPath/orchestration-center/bin
    ``` 
   **创建并激活虚拟环境**

    先创建一个项目所需的虚拟环境，比如使用`conda` 创建一个名为`orchestration-center`的虚拟环境(如果尚未创建)：
   ```bash
      conda create -n orchestration-center 
    ```
    激活虚拟环境
    ```bash
      conda activate orchestration-center 
    ```
   安装项目所需的python依赖(如果未安装)：
    ```bash
      pip install -r ../requirements.txt
    ```
   方式一：

   执行启动脚本以运行项目：
    ```bash
      ./start.sh
    ```
   方式二：
   ```bash
      python -m framework.start
    ```
2. **停止后端服务**

   **进入项目目录下的`bin`文件夹**
    ```bash
      cd /yourPath/orchestration-center/bin
    ``` 
   执行脚本文件：
    ```bash
      ./stop.sh
    ```
### 启动和停止Samples
1. **启动后端服务**
   
   方式一:

   **进入项目目录下的`bin`文件夹**
    ```bash
      cd /yourPath/orchestration-center/bin
    ``` 
   执行脚本文件：
    ```bash
      ./start_samples.sh
    ```
   方式二：
   ```bash
      python -m framework.start
    ```
2. **停止后端服务**

   **进入项目目录下的`bin`文件夹**
    ```bash
      cd /yourPath/orchestration-center/bin
    ``` 
   执行脚本文件：
    ```bash
      ./stop_samples.sh
    ```

### 访问应用
1. 打开浏览器访问 http://localhost:3003
2. 使用工作流设计器创建和编辑流程图
3. 通过 API 接口管理 PSOP 工作流

## API 文档

详细的 API 文档请参考 `framework/server/PSOP_API_DOCUMENTATION.md`，包含以下主要接口：

- `GET /psops` - 获取 PSOP 列表
- `GET /psops/{workflow_id}` - 获取 PSOP 详情
- `POST /psops` - 保存 PSOP
- `DELETE /psops/<workflow_id>` - 删除PSOP
- `POST /parse-pdf` - 解析 PDF 文件
- `POST /plan` - 获取工作流规划
- `GET /agent-cards` - 获取全量AgentCard列表
- `POST /generate-from-intent` - 根据自然语言意图生成PSOP
- `POST /retrieve-by-intent` - 根据自然语言意图检索PSOP
- `GET /rest/start_process_stream?psop_id=<id>` - 启动PSOP执行并推送实时进展