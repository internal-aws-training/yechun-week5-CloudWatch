1. CloudWatch 是什么？我们为什么要使用CloudWatch？
- Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are variables you can measure for your resources and applications.
  
2. CloudWatch中的metrics是什么？包括哪些种类？我们可以如何使用metrics？

CloudWatch中的metrics是什么？

- Metrics are data about the performance of your systems. 

包括哪些种类？

- Available Metrics 
- Custom Metrics

我们可以如何使用metrics？
- 查看可用指标
- 搜索可用指标
- 获取指标的数据
- 绘制指标的图表
- 发布自定义指标
- 使用指标数学
- 在图表中使用搜索表达式

3. CloudWatch Events是什么？可以应用在哪些场景？

CloudWatch Events是什么？
- Amazon CloudWatch Events delivers a near real-time stream of system events that describe changes in Amazon Web Services (AWS) resources. Using simple rules that you can quickly set up, you can match events and route them to one or more target functions or streams.

可以应用在哪些场景？
- [应用场景](!https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/events/EventTypes.html)

相关概念理解：metrics，periods，namespace，count，dimensions，statistics。
- namespace: A namespace is a container for CloudWatch metrics. 
- dimensions: 维度是一个名称/值对，它是指标标识的一部分。您可以为一个指标分配最多 10 个维度。CloudWatch 不会为您的自定义指标跨多个维度进行汇总。
- statistics: 统计数据 是指定时间段内的指标数据聚合。
  - units: 所有统计数据都有度量单位。 
  - Periods: A period is the length of time associated with a specific Amazon CloudWatch statistic. 指定时间段内对收集的指标数据的聚合。时间段以秒为单位定义，时间段的有效值为 1、5、10、30 或 60 的任意倍数。

