"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[745],{557068:function(h,d,t){t.r(d);var p=t(502143),x=t(968521),v=t(720719),j=t(28840),l=t(759907),i=t(828089),m=t(825673),_=t(902068),g=t(574399),f=t(863942),b=t(316073),C=t(24628),B=t(719260),E=t(956140),y=t(127179),o=t(905388),P=t(40428),D=t(606965),s=t(268696),S=t(587302),r=t(424128),w=t(249706),O=t(795127),R=t(116846),T=t(212039),k=t(73024),I=t(553913),a=t(606641),M=t(667294),e=t(785893);function c(){var u=(0,a.eL)(),n=u.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,e.jsxs)("p",{children:[n[1].value,(0,e.jsx)(r.Z,{href:"https://facebook.github.io/react/docs/context.html",sourceType:"a",children:n[2].value}),n[3].value]}),(0,e.jsx)(l.Z,{lang:"tsx",children:n[4].value}),(0,e.jsxs)("h3",{id:"content-security-policy",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#content-security-policy",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Content Security Policy"]}),(0,e.jsxs)("p",{children:[n[5].value,(0,e.jsx)("code",{children:n[6].value}),n[7].value]}),(0,e.jsx)(l.Z,{lang:"tsx",children:n[8].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(o.Z,{items:[{demo:{id:"components-config-provider-demo-locale"},previewerProps:{title:"\u56FD\u9645\u5316",filename:"components/config-provider/demo/locale.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import {
  Upload,
  Tour,
  Input,
  Form,
  QRCode,
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Transfer,
  Image,
  InputNumber,
  Divider,
} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React, { useState } from 'react';
dayjs.locale('en');
const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef([]);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => tourRefs.current[0],
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => tourRefs.current[1],
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => tourRefs.current[2],
    },
  ];
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];
  return (
    <Space
      direction="vertical"
      size={[0, 16]}
      style={{
        width: '100%',
        paddingTop: 16,
        borderTop: \`1px solid \${token.colorBorder}\`,
      }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select
          showSearch
          style={{
            width: 200,
          }}
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div
        style={{
          width: 320,
          border: \`1px solid \${token.colorBorder}\`,
          borderRadius: 8,
        }}
      >
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form
        name="basic"
        autoComplete="off"
        labelCol={{
          sm: {
            span: 4,
          },
        }}
        wrapperCol={{
          span: 6,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider orientation="left">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        Begin Tour
      </Button>
      <Space>
        <Button ref={(node) => node && tourRefs.current.splice(0, 0, node)}> Upload</Button>
        <Button ref={(node) => node && tourRefs.current.splice(1, 0, node)} type="primary">
          Save
        </Button>
        <Button
          ref={(node) => node && tourRefs.current.splice(2, 0, node)}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};
const App = () => {
  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change locale of components:
        </span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u6B64\u5904\u5217\u51FA Ant Design \u4E2D\u9700\u8981\u56FD\u9645\u5316\u652F\u6301\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002</p>"}},{demo:{id:"components-config-provider-demo-direction"},previewerProps:{title:"\u65B9\u5411",filename:"components/config-provider/demo/direction.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
import React, { useState } from 'react';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;
const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;
const cascaderOptions = [
  {
    value: 'tehran',
    label: '\u062A\u0647\u0631\u0627\u0646',
    children: [
      {
        value: 'tehran-c',
        label: '\u062A\u0647\u0631\u0627\u0646',
        children: [
          {
            value: 'saadat-abad',
            label: '\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
    children: [
      {
        value: 'ardabil-c',
        label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
        children: [
          {
            value: 'primadar',
            label: '\u067E\u06CC\u0631\u0645\u0627\u062F\u0631',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: '\u06AF\u06CC\u0644\u0627\u0646',
    children: [
      {
        value: 'rasht',
        label: '\u0631\u0634\u062A',
        children: [
          {
            value: 'district-3',
            label: '\u0645\u0646\u0637\u0642\u0647 \u06F3',
          },
        ],
      },
    ],
  },
];
const Page = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{
        width: 90,
      }}
    >
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{
        width: 80,
      }}
    >
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  // ==== Cascader ====
  const cascaderFilter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  const onCascaderChange = (value) => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setModalOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setModalOpen(false);
  };

  // ==== End Modal ====
  const onStepsChange = (newCurrentStep) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const onChangeBadge = (checked) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====

  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{
              filter: cascaderFilter,
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Radio Group example</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">\u062A\u0647\u0631\u0627\u0646</Radio.Button>
            <Radio.Button value="b" disabled>
              \u0627\u0635\u0641\u0647\u0627\u0646
            </Radio.Button>
            <Radio.Button value="c">\u0641\u0627\u0631\u0633</Radio.Button>
            <Radio.Button value="d">\u062E\u0648\u0632\u0633\u062A\u0627\u0646</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Button example</Divider>
          <div className="button-demo">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode
                  title={
                    <span
                      style={{
                        color: '#1677ff',
                      }}
                    >
                      sss
                    </span>
                  }
                  key="0-0-1-0"
                />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Input (Input Group) example</Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input
              style={{
                width: '20%',
              }}
              defaultValue="0571"
            />
            <Input
              style={{
                width: '30%',
              }}
              defaultValue="26888888"
            />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              style={{
                width: '50%',
              }}
              defaultValue="input content"
            />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Select example</Divider>
              <Space wrap>
                <Select
                  mode="multiple"
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  disabled
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  defaultValue="\u0645\u0648\u0631\u0686\u0647"
                  style={{
                    width: 120,
                  }}
                  loading
                >
                  <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                </Select>
                <Select
                  showSearch
                  style={{
                    width: 200,
                  }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option?.props.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="\u0633\u0639\u06CC\u062F">\u0633\u0639\u06CC\u062F</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </Space>
            </Col>
            <Col span={12}>
              <Divider orientation="left">TreeSelect example</Divider>
              <TreeSelect
                showSearch
                style={{
                  width: '100%',
                }}
                dropdownStyle={{
                  maxHeight: 400,
                  overflow: 'auto',
                }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
              >
                <TreeNode title="parent 1" key="0-1">
                  <TreeNode title="parent 1-0" key="0-1-1">
                    <TreeNode title="my leaf" key="random" />
                    <TreeNode title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="random2">
                    <TreeNode
                      title={
                        <b
                          style={{
                            color: '#08c',
                          }}
                        >
                          sss
                        </b>
                      }
                      key="random3"
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Modal example</Divider>
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal title="\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
              </Modal>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Steps example</Divider>
              <Steps
                progressDot
                current={currentStep}
                items={[
                  {
                    title: 'Finished',
                    description: 'This is a description.',
                  },
                  {
                    title: 'In Progress',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Waiting',
                    description: 'This is a description.',
                  },
                ]}
              />
              <br />
              <Steps
                current={currentStep}
                onChange={onStepsChange}
                items={[
                  {
                    title: 'Step 1',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 2',
                    description: 'This is a description.',
                  },
                  {
                    title: 'Step 3',
                    description: 'This is a description.',
                  },
                ]}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Rate example</Divider>
              <Rate defaultValue={2.5} />
              <br />
              <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
              supported after <a href="https://github.com/react-component/rate">rc-rate</a>{' '}
              implement rtl support.
            </Col>
            <Col span={12}>
              <Divider orientation="left">Badge example</Divider>
              <Badge count={badgeCount}>
                <a href="#" className="head-example" />
              </Badge>
              <ButtonGroup>
                <Button onClick={declineBadge}>
                  <MinusOutlined />
                </Button>
                <Button onClick={increaseBadge}>
                  <PlusOutlined />
                </Button>
              </ButtonGroup>
              <div
                style={{
                  marginTop: 12,
                }}
              >
                <Badge dot={showBadge}>
                  <a href="#" className="head-example" />
                </Badge>
                <Switch onChange={onChangeBadge} checked={showBadge} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const App = () => {
  const [direction, setDirection] = useState('ltr');
  const [popupPlacement, setPopupPlacement] = useState('bottomLeft');
  const changeDirection = (e) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight');
    } else {
      setPopupPlacement('bottomLeft');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change direction of components:
        </span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u8FD9\u91CC\u5217\u51FA\u4E86\u652F\u6301 <code>rtl</code> \u65B9\u5411\u7684\u7EC4\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u5728\u6F14\u793A\u4E2D\u5207\u6362\u65B9\u5411\u3002</p>",style:`.button-demo .ant-btn,
.button-demo .ant-btn-group {
  margin-right: 8px;
  margin-bottom: 12px;
}
.button-demo .ant-btn-group > .ant-btn,
.button-demo .ant-btn-group > span > .ant-btn {
  margin-right: 0;
  margin-left: 0;
}

.head-example {
  display: inline-block;
  width: 42px;
  height: 42px;
  vertical-align: middle;
  background: #eee;
  border-radius: 4px;
}

.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.ant-badge-rtl:not(.ant-badge-not-a-wrapper) {
  margin-right: 0;
  margin-left: 20px;
}`}},{demo:{id:"components-config-provider-demo-size"},previewerProps:{title:"\u7EC4\u4EF6\u5C3A\u5BF8",filename:"components/config-provider/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
import React, { useState } from 'react';
const { TabPane } = Tabs;
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space
          size={[0, 16]}
          style={{
            width: '100%',
          }}
          direction="vertical"
        >
          <Input />
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select
            defaultValue="demo"
            options={[
              {
                value: 'demo',
              },
            ]}
          />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u4FEE\u6539\u9ED8\u8BA4\u7EC4\u4EF6\u5C3A\u5BF8\u3002</p>"}},{demo:{id:"components-config-provider-demo-theme"},previewerProps:{title:"\u4E3B\u9898",filename:"components/config-provider/demo/theme.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Button, ColorPicker, ConfigProvider, Form, InputNumber } from 'antd';
import React from 'react';
const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
};
export default () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState(defaultData);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius,
        },
      }}
    >
      <Form
        form={form}
        onValuesChange={(changedValues, allValues) => {
          const colorObj = changedValues?.colorPrimary
            ? {
                colorPrimary: allValues?.colorPrimary?.toHexString(),
              }
            : {};
          setData({
            ...allValues,
            ...colorObj,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
      >
        <Form.Item valuePropName="color" name="colorPrimary" label="Primary Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius">
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="submit"
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
`,description:"<p>\u901A\u8FC7 <code>theme</code> \u4FEE\u6539\u4E3B\u9898\u3002</p>"}},{demo:{id:"components-config-provider-demo-prefixcls"},previewerProps:{debug:!0,title:"\u524D\u7F00",filename:"components/config-provider/demo/prefixCls.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Select } from 'antd';
import React, { useState } from 'react';

// Ant Design site use \`es\` module for view
// but do not replace related lib \`lib\` with \`es\`
// which do not show correct in site.
// We may need do convert in site also.
const App = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <>
      <Button
        style={{
          marginBottom: '12px',
        }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <br />
      <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
        <SmileOutlined />
        <Select
          style={{
            width: 120,
          }}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u4FEE\u6539\u7EC4\u4EF6\u548C\u56FE\u6807\u524D\u7F00\u3002</p>"}},{demo:{id:"components-config-provider-demo-useconfig"},previewerProps:{debug:!0,title:"useConfig",filename:"components/config-provider/demo/useConfig.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Checkbox, ConfigProvider, Divider, Form, Input, Radio, Space } from 'antd';
const ConfigDisplay = () => {
  const { componentDisabled, componentSize } = ConfigProvider.useConfig();
  return (
    <>
      <Form.Item label="componentSize value">
        <Input value={componentSize} />
      </Form.Item>
      <Form.Item label="componentDisabled value">
        <Input value={String(componentDisabled)} disabled={componentDisabled} />
      </Form.Item>
    </>
  );
};
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <Space>
        <Radio.Group
          value={componentSize}
          onChange={(e) => {
            setComponentSize(e.target.value);
          }}
        >
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
          Form disabled
        </Checkbox>
      </Space>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Form disabled={disabled}>
            <ConfigDisplay />
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>\u83B7\u53D6\u7236\u7EA7 <code>Provider</code> \u7684\u503C\u3002\u5982 <code>DisabledContextProvider</code>\u3001<code>SizeContextProvider</code>\u3002</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[9].value}),(0,e.jsx)("th",{children:n[10].value}),(0,e.jsx)("th",{children:n[11].value}),(0,e.jsx)("th",{children:n[12].value}),(0,e.jsx)("th",{children:n[13].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[14].value}),(0,e.jsxs)("td",{children:[n[15].value,(0,e.jsx)("code",{children:n[16].value}),n[17].value]}),(0,e.jsx)("td",{children:n[18].value}),(0,e.jsx)("td",{children:n[19].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value}),(0,e.jsx)("td",{children:n[24].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[27].value}),n[28].value,(0,e.jsx)("code",{children:n[29].value}),n[30].value,(0,e.jsx)("code",{children:n[31].value})]}),(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[33].value}),(0,e.jsxs)("td",{children:[n[34].value,(0,e.jsx)(r.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",sourceType:"a",children:n[35].value}),n[36].value]}),(0,e.jsx)("td",{children:n[37].value}),(0,e.jsx)("td",{children:n[38].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[39].value}),(0,e.jsxs)("td",{children:[n[40].value,(0,e.jsx)(r.Z,{to:"#components-config-provider-demo-direction",sourceType:"Link",children:n[41].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[42].value}),n[43].value,(0,e.jsx)("code",{children:n[44].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[45].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[46].value}),(0,e.jsx)("td",{children:n[47].value}),(0,e.jsx)("td",{children:n[48].value}),(0,e.jsx)("td",{children:n[49].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[50].value}),(0,e.jsx)("td",{children:n[51].value}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:n[53].value}),(0,e.jsx)("td",{children:n[54].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[58].value})}),(0,e.jsx)("td",{children:n[59].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[60].value}),(0,e.jsxs)("td",{children:[n[61].value,(0,e.jsx)(r.Z,{href:"http://unpkg.com/antd/locale/",sourceType:"a",children:n[62].value}),n[63].value]}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[66].value}),(0,e.jsxs)("td",{children:[n[67].value,(0,e.jsx)("code",{children:n[68].value}),n[69].value,(0,e.jsx)("code",{children:n[70].value}),n[71].value]}),(0,e.jsx)("td",{children:n[72].value}),(0,e.jsx)("td",{children:n[73].value}),(0,e.jsx)("td",{children:n[74].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[75].value}),(0,e.jsx)("td",{children:n[76].value}),(0,e.jsxs)("td",{children:[n[77].value,(0,e.jsx)(s.Z,{previewURL:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png",previewurl:"https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"})]}),(0,e.jsx)("td",{children:n[78].value}),(0,e.jsx)("td",{children:n[79].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[80].value}),(0,e.jsx)("td",{children:n[81].value}),(0,e.jsx)("td",{children:n[82].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:n[83].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[84].value}),(0,e.jsxs)("td",{children:[n[85].value,(0,e.jsx)(r.Z,{to:"/components/empty-cn",sourceType:"Link",children:n[86].value})]}),(0,e.jsx)("td",{children:n[87].value}),(0,e.jsx)("td",{children:n[88].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[89].value}),(0,e.jsxs)("td",{children:[n[90].value,(0,e.jsx)(r.Z,{to:"/docs/react/customize-theme-cn",sourceType:"Link",children:n[91].value})]}),(0,e.jsx)("td",{children:n[92].value}),(0,e.jsx)("td",{children:n[93].value}),(0,e.jsx)("td",{children:n[94].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[95].value}),(0,e.jsxs)("td",{children:[n[96].value,(0,e.jsx)("code",{children:n[97].value}),n[98].value]}),(0,e.jsx)("td",{children:n[99].value}),(0,e.jsx)("td",{children:n[100].value}),(0,e.jsx)("td",{children:n[101].value})]})]})]}),(0,e.jsxs)("h3",{id:"configproviderconfig",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configproviderconfig",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ConfigProvider.config()"]}),(0,e.jsxs)("p",{children:[n[102].value,(0,e.jsx)("code",{children:n[103].value}),n[104].value,(0,e.jsx)("code",{children:n[105].value}),n[106].value,(0,e.jsx)("code",{children:n[107].value}),n[108].value]}),(0,e.jsx)(l.Z,{lang:"ts",children:n[109].value}),(0,e.jsxs)("h3",{id:"configprovideruseconfig-530",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#configprovideruseconfig-530",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ConfigProvider.useConfig() ",(0,e.jsx)("code",{children:n[110].value})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:n[111].value}),n[112].value,(0,e.jsx)("code",{children:n[113].value}),n[114].value,(0,e.jsx)("code",{children:n[115].value}),n[116].value,(0,e.jsx)("code",{children:n[117].value}),n[118].value]}),(0,e.jsx)(l.Z,{lang:"jsx",children:n[119].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[120].value}),(0,e.jsx)("th",{children:n[121].value}),(0,e.jsx)("th",{children:n[122].value}),(0,e.jsx)("th",{children:n[123].value}),(0,e.jsx)("th",{children:n[124].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[125].value}),(0,e.jsx)("td",{children:n[126].value}),(0,e.jsx)("td",{children:n[127].value}),(0,e.jsx)("td",{children:n[128].value}),(0,e.jsx)("td",{children:n[129].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[130].value}),(0,e.jsx)("td",{children:n[131].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[132].value}),n[133].value,(0,e.jsx)("code",{children:n[134].value}),n[135].value,(0,e.jsx)("code",{children:n[136].value})]}),(0,e.jsx)("td",{children:n[137].value}),(0,e.jsx)("td",{children:n[138].value})]})]})]}),(0,e.jsxs)("h3",{id:"\u7EC4\u4EF6\u914D\u7F6E",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u4EF6\u914D\u7F6E",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u4EF6\u914D\u7F6E"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[139].value}),(0,e.jsx)("th",{children:n[140].value}),(0,e.jsx)("th",{children:n[141].value}),(0,e.jsx)("th",{children:n[142].value}),(0,e.jsx)("th",{children:n[143].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[144].value}),(0,e.jsx)("td",{children:n[145].value}),(0,e.jsx)("td",{children:n[146].value}),(0,e.jsx)("td",{children:n[147].value}),(0,e.jsx)("td",{children:n[148].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[149].value}),(0,e.jsx)("td",{children:n[150].value}),(0,e.jsx)("td",{children:n[151].value}),(0,e.jsx)("td",{children:n[152].value}),(0,e.jsx)("td",{children:n[153].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[154].value}),(0,e.jsx)("td",{children:n[155].value}),(0,e.jsx)("td",{children:n[156].value}),(0,e.jsx)("td",{children:n[157].value}),(0,e.jsx)("td",{children:n[158].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[159].value}),(0,e.jsx)("td",{children:n[160].value}),(0,e.jsx)("td",{children:n[161].value}),(0,e.jsx)("td",{children:n[162].value}),(0,e.jsx)("td",{children:n[163].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[164].value}),(0,e.jsx)("td",{children:n[165].value}),(0,e.jsx)("td",{children:n[166].value}),(0,e.jsx)("td",{children:n[167].value}),(0,e.jsx)("td",{children:n[168].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[169].value}),(0,e.jsx)("td",{children:n[170].value}),(0,e.jsx)("td",{children:n[171].value}),(0,e.jsx)("td",{children:n[172].value}),(0,e.jsx)("td",{children:n[173].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[174].value}),(0,e.jsx)("td",{children:n[175].value}),(0,e.jsx)("td",{children:n[176].value}),(0,e.jsx)("td",{children:n[177].value}),(0,e.jsx)("td",{children:n[178].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[179].value}),(0,e.jsx)("td",{children:n[180].value}),(0,e.jsx)("td",{children:n[181].value}),(0,e.jsx)("td",{children:n[182].value}),(0,e.jsx)("td",{children:n[183].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[184].value}),(0,e.jsx)("td",{children:n[185].value}),(0,e.jsx)("td",{children:n[186].value}),(0,e.jsx)("td",{children:n[187].value}),(0,e.jsx)("td",{children:n[188].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[189].value}),(0,e.jsx)("td",{children:n[190].value}),(0,e.jsx)("td",{children:n[191].value}),(0,e.jsx)("td",{children:n[192].value}),(0,e.jsx)("td",{children:n[193].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[194].value}),(0,e.jsx)("td",{children:n[195].value}),(0,e.jsx)("td",{children:n[196].value}),(0,e.jsx)("td",{children:n[197].value}),(0,e.jsx)("td",{children:n[198].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[199].value}),(0,e.jsx)("td",{children:n[200].value}),(0,e.jsx)("td",{children:n[201].value}),(0,e.jsx)("td",{children:n[202].value}),(0,e.jsx)("td",{children:n[203].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[204].value}),(0,e.jsx)("td",{children:n[205].value}),(0,e.jsx)("td",{children:n[206].value}),(0,e.jsx)("td",{children:n[207].value}),(0,e.jsx)("td",{children:n[208].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[209].value}),(0,e.jsx)("td",{children:n[210].value}),(0,e.jsx)("td",{children:n[211].value}),(0,e.jsx)("td",{children:n[212].value}),(0,e.jsx)("td",{children:n[213].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[214].value}),(0,e.jsx)("td",{children:n[215].value}),(0,e.jsx)("td",{children:n[216].value}),(0,e.jsx)("td",{children:n[217].value}),(0,e.jsx)("td",{children:n[218].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[219].value}),(0,e.jsx)("td",{children:n[220].value}),(0,e.jsx)("td",{children:n[221].value}),(0,e.jsx)("td",{children:n[222].value}),(0,e.jsx)("td",{children:n[223].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[224].value}),(0,e.jsx)("td",{children:n[225].value}),(0,e.jsx)("td",{children:n[226].value}),(0,e.jsx)("td",{children:n[227].value}),(0,e.jsx)("td",{children:n[228].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[229].value}),(0,e.jsx)("td",{children:n[230].value}),(0,e.jsx)("td",{children:n[231].value}),(0,e.jsx)("td",{children:n[232].value}),(0,e.jsx)("td",{children:n[233].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[234].value}),(0,e.jsx)("td",{children:n[235].value}),(0,e.jsxs)("td",{children:[n[236].value,(0,e.jsx)(r.Z,{to:"/components/form-cn#validatemessages",sourceType:"Link",children:n[237].value}),n[238].value,(0,e.jsx)("code",{children:n[239].value}),n[240].value,(0,e.jsx)(r.Z,{href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options",sourceType:"a",children:n[241].value}),n[242].value]}),(0,e.jsx)("td",{children:n[243].value}),(0,e.jsx)("td",{children:n[244].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[245].value}),(0,e.jsx)("td",{children:n[246].value}),(0,e.jsx)("td",{children:n[247].value}),(0,e.jsx)("td",{children:n[248].value}),(0,e.jsx)("td",{children:n[249].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[250].value}),(0,e.jsx)("td",{children:n[251].value}),(0,e.jsx)("td",{children:n[252].value}),(0,e.jsx)("td",{children:n[253].value}),(0,e.jsx)("td",{children:n[254].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[255].value}),(0,e.jsx)("td",{children:n[256].value}),(0,e.jsx)("td",{children:n[257].value}),(0,e.jsx)("td",{children:n[258].value}),(0,e.jsx)("td",{children:n[259].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[260].value}),(0,e.jsx)("td",{children:n[261].value}),(0,e.jsx)("td",{children:n[262].value}),(0,e.jsx)("td",{children:n[263].value}),(0,e.jsx)("td",{children:n[264].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[265].value}),(0,e.jsx)("td",{children:n[266].value}),(0,e.jsx)("td",{children:n[267].value}),(0,e.jsx)("td",{children:n[268].value}),(0,e.jsx)("td",{children:n[269].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[270].value}),(0,e.jsx)("td",{children:n[271].value}),(0,e.jsx)("td",{children:n[272].value}),(0,e.jsx)("td",{children:n[273].value}),(0,e.jsx)("td",{children:n[274].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[275].value}),(0,e.jsx)("td",{children:n[276].value}),(0,e.jsx)("td",{children:n[277].value}),(0,e.jsx)("td",{children:n[278].value}),(0,e.jsx)("td",{children:n[279].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[280].value}),(0,e.jsx)("td",{children:n[281].value}),(0,e.jsx)("td",{children:n[282].value}),(0,e.jsx)("td",{children:n[283].value}),(0,e.jsx)("td",{children:n[284].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[285].value}),(0,e.jsx)("td",{children:n[286].value}),(0,e.jsx)("td",{children:n[287].value}),(0,e.jsx)("td",{children:n[288].value}),(0,e.jsx)("td",{children:n[289].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[290].value}),(0,e.jsx)("td",{children:n[291].value}),(0,e.jsx)("td",{children:n[292].value}),(0,e.jsx)("td",{children:n[293].value}),(0,e.jsx)("td",{children:n[294].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[295].value}),(0,e.jsx)("td",{children:n[296].value}),(0,e.jsx)("td",{children:n[297].value}),(0,e.jsx)("td",{children:n[298].value}),(0,e.jsx)("td",{children:n[299].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[300].value}),(0,e.jsx)("td",{children:n[301].value}),(0,e.jsx)("td",{children:n[302].value}),(0,e.jsx)("td",{children:n[303].value}),(0,e.jsx)("td",{children:n[304].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[305].value}),(0,e.jsx)("td",{children:n[306].value}),(0,e.jsx)("td",{children:n[307].value}),(0,e.jsx)("td",{children:n[308].value}),(0,e.jsx)("td",{children:n[309].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[310].value}),(0,e.jsx)("td",{children:n[311].value}),(0,e.jsx)("td",{children:n[312].value}),(0,e.jsx)("td",{children:n[313].value}),(0,e.jsx)("td",{children:n[314].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[315].value}),(0,e.jsx)("td",{children:n[316].value}),(0,e.jsx)("td",{children:n[317].value}),(0,e.jsx)("td",{children:n[318].value}),(0,e.jsx)("td",{children:n[319].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[320].value}),(0,e.jsx)("td",{children:n[321].value}),(0,e.jsx)("td",{children:n[322].value}),(0,e.jsx)("td",{children:n[323].value}),(0,e.jsx)("td",{children:n[324].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[325].value}),(0,e.jsx)("td",{children:n[326].value}),(0,e.jsx)("td",{children:n[327].value}),(0,e.jsx)("td",{children:n[328].value}),(0,e.jsx)("td",{children:n[329].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[330].value}),(0,e.jsx)("td",{children:n[331].value}),(0,e.jsx)("td",{children:n[332].value}),(0,e.jsx)("td",{children:n[333].value}),(0,e.jsx)("td",{children:n[334].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[335].value}),(0,e.jsx)("td",{children:n[336].value}),(0,e.jsx)("td",{children:n[337].value}),(0,e.jsx)("td",{children:n[338].value}),(0,e.jsx)("td",{children:n[339].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[340].value}),(0,e.jsxs)("td",{children:[n[341].value,(0,e.jsx)(r.Z,{to:"/components/space-cn",sourceType:"Link",children:n[342].value})]}),(0,e.jsxs)("td",{children:[n[343].value,(0,e.jsx)("code",{children:n[344].value}),n[345].value,(0,e.jsx)("code",{children:n[346].value}),n[347].value,(0,e.jsx)("code",{children:n[348].value}),n[349].value,(0,e.jsx)("code",{children:n[350].value}),n[351].value]}),(0,e.jsx)("td",{children:n[352].value}),(0,e.jsx)("td",{children:n[353].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[354].value}),(0,e.jsx)("td",{children:n[355].value}),(0,e.jsx)("td",{children:n[356].value}),(0,e.jsx)("td",{children:n[357].value}),(0,e.jsx)("td",{children:n[358].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[359].value}),(0,e.jsx)("td",{children:n[360].value}),(0,e.jsx)("td",{children:n[361].value}),(0,e.jsx)("td",{children:n[362].value}),(0,e.jsx)("td",{children:n[363].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[364].value}),(0,e.jsx)("td",{children:n[365].value}),(0,e.jsx)("td",{children:n[366].value}),(0,e.jsx)("td",{children:n[367].value}),(0,e.jsx)("td",{children:n[368].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[369].value}),(0,e.jsx)("td",{children:n[370].value}),(0,e.jsx)("td",{children:n[371].value}),(0,e.jsx)("td",{children:n[372].value}),(0,e.jsx)("td",{children:n[373].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[374].value}),(0,e.jsx)("td",{children:n[375].value}),(0,e.jsx)("td",{children:n[376].value}),(0,e.jsx)("td",{children:n[377].value}),(0,e.jsx)("td",{children:n[378].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[379].value}),(0,e.jsx)("td",{children:n[380].value}),(0,e.jsx)("td",{children:n[381].value}),(0,e.jsx)("td",{children:n[382].value}),(0,e.jsx)("td",{children:n[383].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[384].value}),(0,e.jsx)("td",{children:n[385].value}),(0,e.jsx)("td",{children:n[386].value}),(0,e.jsx)("td",{children:n[387].value}),(0,e.jsx)("td",{children:n[388].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[389].value}),(0,e.jsx)("td",{children:n[390].value}),(0,e.jsx)("td",{children:n[391].value}),(0,e.jsx)("td",{children:n[392].value}),(0,e.jsx)("td",{children:n[393].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[394].value}),(0,e.jsx)("td",{children:n[395].value}),(0,e.jsx)("td",{children:n[396].value}),(0,e.jsx)("td",{children:n[397].value}),(0,e.jsx)("td",{children:n[398].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[399].value}),(0,e.jsx)("td",{children:n[400].value}),(0,e.jsx)("td",{children:n[401].value}),(0,e.jsx)("td",{children:n[402].value}),(0,e.jsx)("td",{children:n[403].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[404].value}),(0,e.jsx)("td",{children:n[405].value}),(0,e.jsx)("td",{children:n[406].value}),(0,e.jsx)("td",{children:n[407].value}),(0,e.jsx)("td",{children:n[408].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[409].value}),(0,e.jsx)("td",{children:n[410].value}),(0,e.jsx)("td",{children:n[411].value}),(0,e.jsx)("td",{children:n[412].value}),(0,e.jsx)("td",{children:n[413].value})]})]})]}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h4",{id:"\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF1F"]}),(0,e.jsxs)("p",{children:[n[414].value,(0,e.jsx)(r.Z,{to:"/docs/react/i18n#%E5%A2%9E%E5%8A%A0%E8%AF%AD%E8%A8%80%E5%8C%85",sourceType:"Link",children:n[415].value}),n[416].value]}),(0,e.jsxs)("h4",{id:"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"]}),(0,e.jsxs)("p",{children:[n[417].value,(0,e.jsx)(r.Z,{to:"/docs/react/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%B6%E9%97%B4%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96-locale-%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88",sourceType:"Link",children:n[418].value}),n[419].value]}),(0,e.jsxs)("h4",{id:"\u914D\u7F6E-getpopupcontainer-\u5BFC\u81F4-modal-\u62A5\u9519",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E-getpopupcontainer-\u5BFC\u81F4-modal-\u62A5\u9519",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E ",(0,e.jsx)("code",{children:n[420].value})," \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F"]}),(0,e.jsxs)("p",{children:[n[421].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/19974",sourceType:"a",children:n[422].value})]}),(0,e.jsxs)("p",{children:[n[423].value,(0,e.jsx)("code",{children:n[424].value}),n[425].value,(0,e.jsx)("code",{children:n[426].value}),n[427].value,(0,e.jsx)("code",{children:n[428].value}),n[429].value,(0,e.jsx)(r.Z,{href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a",sourceType:"a",children:n[430].value}),n[431].value]}),(0,e.jsx)(l.Z,{lang:"diff",children:n[432].value}),(0,e.jsxs)("h4",{id:"\u4E3A\u4EC0\u4E48-messageinfonotificationopen-\u6216-modalconfirm-\u7B49\u65B9\u6CD5\u5185\u7684-reactnode-\u65E0\u6CD5\u7EE7\u627F-configprovider-\u7684\u5C5E\u6027\u6BD4\u5982-prefixcls-\u548C-theme",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-messageinfonotificationopen-\u6216-modalconfirm-\u7B49\u65B9\u6CD5\u5185\u7684-reactnode-\u65E0\u6CD5\u7EE7\u627F-configprovider-\u7684\u5C5E\u6027\u6BD4\u5982-prefixcls-\u548C-theme",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4E3A\u4EC0\u4E48 message.info\u3001notification.open \u6216 Modal.confirm \u7B49\u65B9\u6CD5\u5185\u7684 ReactNode \u65E0\u6CD5\u7EE7\u627F ConfigProvider \u7684\u5C5E\u6027\uFF1F\u6BD4\u5982 ",(0,e.jsx)("code",{children:n[433].value})," \u548C ",(0,e.jsx)("code",{children:n[434].value}),"\u3002"]}),(0,e.jsx)("p",{children:n[435].value}),(0,e.jsxs)("h4",{id:"vite-\u751F\u4EA7\u6A21\u5F0F\u6253\u5305\u540E\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#vite-\u751F\u4EA7\u6A21\u5F0F\u6253\u5305\u540E\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Vite \u751F\u4EA7\u6A21\u5F0F\u6253\u5305\u540E\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"]}),(0,e.jsxs)("p",{children:[n[436].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/39045",sourceType:"a",children:n[437].value})]}),(0,e.jsxs)("p",{children:[n[438].value,(0,e.jsx)("code",{children:n[439].value}),n[440].value,(0,e.jsx)("code",{children:n[441].value}),n[442].value]})]})]})})}d.default=c}}]);