import React from 'react';
import FroalaCharts from 'froalacharts';
import CandyTheme from 'froalacharts/themes/froalacharts.theme.candy';
import ReactFC from '../lib/ReactFC';

ReactFC.fcRoot(FroalaCharts, CandyTheme);

const BAR = 'bar';

class ChartViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inverted: false,
      type: BAR,
      dataSource: {
        "chart": {
          "caption": "Business Results 2005 v 2006",
          "xaxisname": "Month",
          "yaxisname": "Revenue",
          "showvalues": "0",
          "numberprefix": "$",
          "animation": "1",
          "theme": "candy"
        },
        "categories": [
          {
            "category": [
              {
                "label": "Jan"
              },
              {
                "label": "Feb"
              },
              {
                "label": "Mar"
              },
              {
                "label": "Apr"
              },
              {
                "label": "May"
              },
              {
                "label": "Jun"
              },
              {
                "label": "Jul"
              },
              {
                "label": "Aug"
              },
              {
                "label": "Sep"
              },
              {
                "label": "Oct"
              },
              {
                "label": "Nov"
              },
              {
                "label": "Dec"
              }
            ]
          }
        ],
        "dataset": [
          {
            "seriesname": "2006",
            "data": [
              {
                "value": "27400"
              },
              {
                "value": "29800"
              },
              {
                "value": "25800"
              },
              {
                "value": "26800"
              },
              {
                "value": "29600"
              },
              {
                "value": "32600"
              },
              {
                "value": "31800"
              },
              {
                "value": "36700"
              },
              {
                "value": "29700"
              },
              {
                "value": "31900"
              },
              {
                "value": "34800"
              },
              {
                "value": "24800"
              }
            ]
          },
          {
            "seriesname": "2005",
            "data": [
              {
                "value": "10000"
              },
              {
                "value": "11500"
              },
              {
                "value": "12500"
              },
              {
                "value": "15000"
              },
              {
                "value": "11000"
              },
              {
                "value": "9800"
              },
              {
                "value": "11800"
              },
              {
                "value": "19700"
              },
              {
                "value": "21700"
              },
              {
                "value": "21900"
              },
              {
                "value": "22900"
              },
              {
                "value": "20800"
              }
            ]
          }
        ],
        "trendlines": [
          {
            "line": [
              {
                "startvalue": "26000",
                "color": "91C728",
                "displayvalue": "Target",
                "showontop": "1"
              }
            ]
          }
        ],
        "styles": {
          "definition": [
            {
              "name": "CanvasAnim",
              "type": "animation",
              "param": "_xScale",
              "start": "0",
              "duration": "1"
            }
          ],
          "application": [
            {
              "toobject": "Canvas",
              "styles": "CanvasAnim"
            }
          ]
        }
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState(({ dataSource }) => ({
      dataSource: {
        ...dataSource,
        chart: { ...dataSource.chart, caption: 'CHANGED IT!!!!!!!' }
      }
    }));
  }

  render() {
    return (
      <div>
        <ReactFC
          type={this.state.type}
          width={this.state.inverted ? '400' : '600'}
          height={this.state.inverted ? '600' : '400'}
          dataFormat="json"
          dataSource={this.state.dataSource}
        />
        <button onClick={this.onChange}>CHANGE</button>
      </div>
    );
  }
}

export default ChartViewer;
