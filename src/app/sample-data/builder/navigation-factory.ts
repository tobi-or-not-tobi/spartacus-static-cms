export interface NavigationFactoryData {
  type: string;
  uid: string;
  childs: (NavigationChild | string)[];
}
export interface NavigationChild {
  uid?: string;
  title?: string;
  entryId?: string;
  childs?: (NavigationChild | string)[];
}

export class SampleDataNavigationFactory {
  static build(nav: NavigationFactoryData) {
    const results = {
      type: nav.type,
      navigationNode: SampleDataNavigationFactory.buildNode(
        nav as NavigationChild
      ),
    };
    return results;
  }

  static buildNode(child: NavigationChild) {
    const childNode: any = {};
    if (child.uid) {
      childNode.uid = child.uid;
    }
    if (child.title) {
      childNode.title = child.title;
    }

    if (child.entryId || typeof child === 'string') {
      childNode.entries = [];

      childNode.entries.push({
        itemId: child.entryId || child,
        itemSuperType: 'AbstractCMSComponent',
        itemType: 'CMSLinkComponent',
      });
    }
    if (child.childs) {
      childNode.children = [];
      child.childs.forEach(c =>
        childNode.children.push(
          SampleDataNavigationFactory.buildNode(c as NavigationChild)
        )
      );
    }

    return childNode;
  }
}
