import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FactorySafetyWebPartStrings';
import FactorySafety from './components/FactorySafety';
import { IFactorySafetyProps } from './components/IFactorySafetyProps';

export interface IFactorySafetyWebPartProps {
  description: string;
  showEmergencyContacts: boolean;
  companyName: string;
}

export default class FactorySafetyWebPart extends BaseClientSideWebPart<IFactorySafetyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFactorySafetyProps> = React.createElement(
      FactorySafety,
      {
        description: this.properties.description,
        showEmergencyContacts: this.properties.showEmergencyContacts,
        companyName: this.properties.companyName || 'ELVIAL SA',
        isDarkTheme: this.context.sdks?.microsoftTeams?.context?.theme === 'dark',
        environmentMessage: this._getEnvironmentMessage(),
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) {
      return this.context.isServedFromLocalhost ? 'Τοπικό περιβάλλον ανάπτυξης - Microsoft Teams' : 'Microsoft Teams';
    }

    return this.context.isServedFromLocalhost ? 'Τοπικό περιβάλλον ανάπτυξης - SharePoint' : 'SharePoint';
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('companyName', {
                  label: 'Όνομα Εταιρείας'
                }),
                PropertyPaneToggle('showEmergencyContacts', {
                  label: 'Εμφάνιση Επαφών Έκτακτης Ανάγκης',
                  onText: 'Ναι',
                  offText: 'Όχι'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
