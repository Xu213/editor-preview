import * as React from 'react';
import { normalizeApi } from "amis-core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars


export default class SchemaSlotRenderer extends React.Component {
  state: any = {
    data: {},
    loading: false,
  };
  
  componentDidMount() {
    //@ts-ignore
    const { initFetch } = this.props;
    if (initFetch) {
      //@ts-ignore
      this.getCustomApi();
    }
  }
  getCustomApi(val: any) {
    //@ts-ignore
    const { env, api, sentence } = this.props;
    const _api = normalizeApi(api);
    this.setState({ loading: true });
    env.fetcher({ ..._api, data: { c: val || sentence } })
      //@ts-ignore
      .then(({ data: any }) => {
        //@ts-ignore
        this.setState({ data: data, loading: false });
      })
      .catch((err: any) => {
        this.setState({ loading: false });
      });
  }

  render() {
    //@ts-ignore
    const {label,showAbout, body, render} = this.props;
    return (
      <>
        {showAbout && <p>自定义：{label}</p>}
        {body ? (
          <div className="container">
            {render('body', body, {
              // 这里的信息会作为 props 传递给子组件，一般情况下都不需要这个
            })}
          </div>
        ) : null}
      </>
    );
  }
}