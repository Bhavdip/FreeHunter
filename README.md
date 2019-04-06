# FreeHunter

This is the Propose Mobile Application for FreeHunter Organization. Its is private repo.

## 1.1 Please propose a best practice for creating and managing page navigation in any React Native Social Network applications.How did you manage the structure in different main pages and subpages and integrate this with deep linking and push notification? Please explain the reasons and philosophies behind.

There are mainly two famous community javascript libraries are available for routing. 
1. ReactNative Navigation(Community Edition) 
2. WIX/Navigation

Each has its pros and cons.Based on my experience WIX/Navigation its working well but its has quirks and many problems.
Such as to prevent use to multiple click behavior its add screen twice in stack, Android Platform Specific issue on back-press
behavior on hardware back-press different when you are on the screen has tabs when press back button it change the tab instead of go back to the previous screen, customization in header navigation has no more choice.

After V2 they solved Multiple Click issues and Android Hardware Back Behavior.Still if we talk about deeplinking/push notification still it very trick to mange on wix navigation.

I propose to use React Community React-navigation you can see on github there are less issues unlike wix/ReactNavigation. I like the clean documentations with sample.If we compare those problems here then React-Navigation has well managed the deeplinking/push notification and Android Specific issues.

Best part of React-Navigation is stack navigation management, you can create Multiple stacks and sub pages inside it. Navigate from one stack to another stack. Move from screen of one stack to another screen in different stack.Stack switching is well design.Also its provided the full customization to action-bar, different tab navigation,deeplinking and good community support.

# 1.2 Please explain a component life-circle inside a typical React Native application. Will there be any difference in different mobile device operating system?

React provides various methods which notify when a certain stage in the lifecycle of a component occurs. These methods are called the lifecycle methods. These lifecycle methods are not very complicated. You can think of these methods as specialized event handlers that are called at various points during a components life. You can even add your own code to these methods to perform various tasks. Talking about the lifecycle of the component, the lifecycle is divided into 3 phases. They are:

Mounting
Updating Phase
Unmounting Phase

Since its purely written and managed on javascript layer, I think its has no major concern with mobile operating system.

# 1.3 Please explain a well-thought and well-designed React Native based application files structure and the reason behind it.

I would preferred the Atomic Design, its helps to build consistent, solid and reusable design systems. Plus, in the world of React, Vue and frameworks that stimulate the componentization.

The name Atomic Design comes from the idea of separating the components in atoms, molecules, organisms, templates and pages, But what are the responsibilities of each separated part?

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.

Molecules:They are the composition of one or more components of atoms.Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

Organisms:Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces.

Pages/Screens: Pages/Screens are the navigate parts of the application and it’s where the components are distributed.

For more info: https://github.com/danilowoz/react-atomic-design
