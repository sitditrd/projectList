(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					}
				}
			},
			"ChildFrame" :
			{
				"self" :
				{
					"disabled" :
					{
					},
					"deactivate" :
					{
					}
				}
			},
			"FrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"deactivate" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							},
							"deactivate" :
							{
							}
						}
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							}
						}
					}
				}
			},
			"StatusBarControl" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					},
					"ProgressBar" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"progressstartcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"progressendcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"statustext" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#333333"),
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"contents" :
					{
					}
				}
			},
			"Button" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"selected" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"pushed" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				[
					{
						"btn_TF_Menu" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#c7e6fc"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 5px"),
									"color" : nexacro.ColorObject("#005996")
								}
							}
						}
					},
					{
						"btn_TF_setting" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_TF_stting" :
						{
							"self" :
							{
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								}
							}
						}
					},
					{
						"btn_TF_userInfo" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoN.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_userInfoN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_TF_LeftOpen" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftOpenN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_LF_MenuBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_LF_Menu" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_menuN.png\")")
								}
							}
						}
					},
					{
						"btn_LF_MenuSearch" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_searchN.png\")")
								}
							}
						}
					},
					{
						"btn_LF_MenuHistory" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_historyN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_Home" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_homeD.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_Tab" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#949799")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#949799")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #e4e7ea, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473")
								}
							}
						}
					},
					{
						"btn_MDI_TabFix" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #004473,1px solid #004473,0px none"),
									"padding" : nexacro.PaddingObject("0px 26px 0px 12px"),
									"color" : nexacro.ColorObject("#004473"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"btn_MDI_TabClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_MDI_LeftTabCha" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaN.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaM.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_leftTabChaN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_RightTabCha" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaN.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaM.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_rightTabChaN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnFull" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullM.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnFullN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnWin" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinM.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnWinN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnVDiv" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivM.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnVDivN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnHDiv" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivM.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnHDivN.png\")")
								}
							}
						}
					},
					{
						"btn_MDI_ScnClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseN.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseM.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_scnCloseN.png\")")
								}
							}
						}
					},
					{
						"btn_WF_newPopup" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopup.png')")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopup.png')")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopup.png')")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopup.png')")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopup.png')")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupD.png')")
								}
							}
						}
					},
					{
						"btn_WF_newPopupR" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupR.png')")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupR.png')")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupR.png')")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupR.png')")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupR.png')")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_newPopupRD.png')")
								}
							}
						}
					},
					{
						"btn_WF_Search" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnN.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnM.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnP.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchBtnD.png\")")
								}
							}
						}
					},
					{
						"btn_WF_SearchIcon" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
								}
							}
						}
					},
					{
						"btn_WF_Help" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpM.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpP.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_helpD.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_POP_Close" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainFloat" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_mainFloat.png\")"),
									"padding" : nexacro.PaddingObject("0px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("24px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_mainFloat.png\")"),
									"padding" : nexacro.PaddingObject("0px"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("24px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_mainFloat.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_mainFloat.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_mainFloat.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_WF_mainSite01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_support.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_support.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_mainSite02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_playnx.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_playnx.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_mainSite03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_tobetong.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 50px"),
									"font" : nexacro.FontObject("24px/normal \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_logo_tobetong.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn01.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn01.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn01.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn01.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn01.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn02.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn02.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn02.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn02.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn02.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn03.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn03.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn03.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn03.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn03.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn04.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn04.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn04.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn04.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn04.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn05.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn05.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn05.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn05.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn05.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainQbtn06" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn06.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn06.png\")"),
									"iconPosition" : "top",
									"textPadding" : nexacro.PaddingObject("15px 0px 0px"),
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn06.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn06.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_mainQbtn06.png\")")
								}
							}
						}
					},
					{
						"btn_LF_SelectMenu_S" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #09162b, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #09162b, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("2px solid #09162b, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("2px solid #09162b, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								}
							}
						}
					},
					{
						"btn_LF_SelectMenu_D" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6f82a1")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6f82a1")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6f82a1")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6f82a1")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6f82a1")
								}
							}
						}
					},
					{
						"btn_LF_BookMark_S" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark_S.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark_S.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark_S.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark_S.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark_S.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								}
							}
						}
					},
					{
						"btn_LF_BookMark_D" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #132644, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #bbd5fe, 0px none, 0px none"),
									"padding" : nexacro.PaddingObject("0px"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/tab_LF_bookMark.png\")"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#bbd5fe")
								}
							}
						}
					},
					{
						"btn_WF_SearchSmall" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b5bdc4")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ff691f")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #ff691f")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff691f")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #5b676e")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5d5d5")
								}
							}
						}
					},
					{
						"btn_WF_Btitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkS.png\")")
								}
							}
						}
					},
					{
						"btn_WF_BtitleOn" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkM.png\")")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkM.png\")")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkM.png\")")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkM.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_bookMarkN.png\")")
								}
							}
						}
					},
					{
						"btn_WF_search01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_search02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_LF_menuOpen" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#fffcdb"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#fffcdb"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#fffcdb"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#fffcdb"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#fffcdb"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#495974"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuOpen_D.png\")")
								}
							}
						}
					},
					{
						"btn_LF_menuClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose.png\")"),
									"iconPosition" : "right",
									"textPadding" : nexacro.PaddingObject("0px 3px 0px 0px")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#495974"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_LF_menuClose_D.png\")")
								}
							}
						}
					},
					{
						"btn_WF_navClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_navCloseW.png\")")
								}
							}
						}
					},
					{
						"btn_TF_MenuLspin" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_leftSpinIconD.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								}
							}
						}
					},
					{
						"btn_TF_MenuRspin" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIcon.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 1px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_rightSpinIconD.png\")"),
									"padding" : nexacro.PaddingObject("0px 1px 0px 0px")
								}
							}
						}
					},
					{
						"btn_TF_LogOut" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutN.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_logoutN.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								}
							}
						}
					},
					{
						"btn_TF_Setting" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingMP.png\")"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_settingN.png\")"),
									"padding" : nexacro.PaddingObject("0px")
								}
							}
						}
					},
					{
						"btn_LF_menuD1" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("bold 19px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("bold 19px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#283d60")
								}
							}
						}
					},
					{
						"btn_LF_menuD2" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("15px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#bbd5fe"),
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#1e4686")
								}
							}
						}
					},
					{
						"btn_WF_menuOpen" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightW.png\")")
								}
							}
						}
					},
					{
						"btn_WF_menuClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftW.png\")")
								}
							}
						}
					},
					{
						"btn_WF_btnWhite" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("normal 14px/normal \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_widgetMove04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_calculatorBack" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_calculatorNum" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("24px \"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("24px \"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("24px \"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("24px \"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("24px \"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_division" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_multiple" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_minus" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_plus" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_result" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"Arial\"")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"Arial\"")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("26px \"Arial\"")
								}
							}
						}
					},
					{
						"btn_WF_noteAdd" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_noteDel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_noteHead" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_widgetMove02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_widgetMove03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_popClose" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_multiCombo" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c"),
									"icon" : nexacro.UrlObject("URL(\"imagerc::btn_B_down.png\")"),
									"padding" : nexacro.PaddingObject("1px 0px 0px")
								}
							}
						}
					},
					{
						"btn_WF_up" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								}
							}
						}
					},
					{
						"btn_WF_down" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
								}
							}
						}
					},
					{
						"btn_WF_hancelInput" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"btn_WF_hancelOutput" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"btn_WF_excelInput" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"btn_WF_excelOutput" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 17px")
								}
							}
						}
					},
					{
						"btn_WF_reset" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 13px")
								}
							}
						}
					},
					{
						"btn_WF_print" :
						{
							"self" :
							{
								"enabled" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"selected" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222")
								},
								"pushed" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"border" : nexacro.BorderObject("1px solid #b9b9b9"),
									"color" : nexacro.ColorObject("#222222")
								},
								"disabled" :
								{
									"icon" : nexacro.UrlObject("url('imagerc::btn_WF_print.png')"),
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222")
								}
							}
						}
					},
					{
						"btn_WF_basic01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #22457c"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #22457c"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #163a73")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #163a73")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #163a73")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
									"color" : nexacro.ColorObject("#aaaaaa")
								}
							}
						}
					},
					{
						"btn_WF_basic02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c80ae"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #9c80ae"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #836c93")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #836c93")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #836c93")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
									"color" : nexacro.ColorObject("#aaaaaa")
								}
							}
						}
					},
					{
						"btn_WF_basic03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #1e9495"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #1e9495"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #1e9495")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #1e9495")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #1e9495")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
									"color" : nexacro.ColorObject("#aaaaaa")
								}
							}
						}
					},
					{
						"btn_WF_basic04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d16959"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #d16959"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c66151")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #c66151")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #c66151")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
									"color" : nexacro.ColorObject("#aaaaaa")
								}
							}
						}
					},
					{
						"btn_WF_basic05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #bdbdbd"),
									"color" : nexacro.ColorObject("#555555"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #bdbdbd"),
									"color" : nexacro.ColorObject("#555555"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #afafaf")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #afafaf")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #afafaf")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("1px solid #aaaaaa"),
									"color" : nexacro.ColorObject("#aaaaaa")
								}
							}
						}
					},
					{
						"btn_WF_portMove" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_portBg01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 5px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 5px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 5px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 5px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 5px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("30px 10px 0px 10px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 5px 0px 5px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 5px 0px 5px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 5px 0px 5px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 5px 0px 5px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 5px 0px 5px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 20px 0px 20px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 20px 0px 20px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 20px 0px 20px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 20px 0px 20px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 20px 0px 20px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg06" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 15px 0px 15px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 15px 0px 15px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 15px 0px 15px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 15px 0px 15px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("25px 15px 0px 15px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg07" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_portBg08" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 30px 10px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 30px 10px")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 30px 10px")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 30px 10px")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 30px 10px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#9d9d9d")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
								},
								"selected" :
								{
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#9d9d9d")
								}
							}
						}
					},
					{
						"btn_WF_mainBtn01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn01.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn01.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn01.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn01.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn01.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainBtn02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn02.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn02.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn02.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn02.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn02.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainBtn03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn03.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn03.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn03.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn03.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn03.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainBtn04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn04.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn04.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn04.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn04.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn04.png\")")
								}
							}
						}
					},
					{
						"btn_WF_mainBtn05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn05.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn05.png\")"),
									"iconPosition" : "left",
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
									"color" : nexacro.ColorObject("#cccccc"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn05.png\")")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn05.png\")")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_manBtn05.png\")")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #887a72"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #887a72"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #7c6f68")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #7c6f68")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #7c6f68")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn04" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f97c3f"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #f97c3f"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #f37538")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #f37538")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #f37538")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #96877d"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #96877d"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #96877d")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #96877d")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #96877d")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn06" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #888888"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #888888"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #888888")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #888888")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #888888")
								}
							}
						}
					},
					{
						"btn_WF_hwBtn07" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #339798"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #339798"),
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #328f90")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #328f90")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #328f90")
								}
							}
						}
					},
					{
						"btn_WF_accoBtn" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #feb28d"),
									"color" : nexacro.ColorObject("#333333"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_accoClose.png\")"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\""),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #feb28d"),
									"color" : nexacro.ColorObject("#333333"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_accoClose.png\")"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\""),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #ffa77c")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #ffa77c")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #ffa77c")
								}
							}
						}
					},
					{
						"btn_WF_accoBtnO" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #ff884e"),
									"color" : nexacro.ColorObject("#ffffff"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_accOpen.png\")"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\""),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("1px solid #ff884e"),
									"color" : nexacro.ColorObject("#ffffff"),
									"icon" : nexacro.UrlObject("URL(\"theme://images/img_WF_accOpen.png\")"),
									"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\""),
									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 2px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #f97c3f")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("1px solid #f97c3f")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("1px solid #f97c3f")
								}
							}
						}
					},
					{
						"btn_WF_accordionBtn" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"btn_WF_accordionBtnO" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"pushed" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"selected" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					}
				},
				"class" :
				[
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
								"padding" : nexacro.PaddingObject("0px 2px 0px 2px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnD.png\")")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnD.png\")")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnD.png\")")
									}
								}
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnN.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dropBtnD.png\")")
									}
								}
							}
						}
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							},
							"readonly" :
							{
								"color" : nexacro.ColorObject("#777777")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"nulltext" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#aeaeae")
									}
								}
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
									}
								}
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
									}
								}
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
					},
					"focused" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxS.png\")")
					},
					"mouseover_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxMS.png\")")
					},
					"disabled" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxD.png\")"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"disabled_selected" :
					{
						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxDS.png\")")
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"readonly" :
					{
					}
				},
				"class" :
				[
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#aeaeae")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#afafaf")
									},
									"nulltext" :
									{
										"color" : nexacro.ColorObject("#d0d0d0")
									}
								}
							}
						}
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8")
									}
								}
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"disabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#666666")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							},
							"cellcombo" :
							{
								"parent" :
								{
									"GridCellControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#333333")
											},
											"focused" :
											{
												"color" : nexacro.ColorObject("#333333")
											},
											"selected" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#333333")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover_selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#333333")
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#333333")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover_selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled_selected" :
							{
								"color" : nexacro.ColorObject("#333333")
							}
						}
					}
				}
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #2b3753")
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"readonly" :
							{
								"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							}
						}
					},
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #d3d3d3, 0px none"),
								"color" : nexacro.ColorObject("#032c6c")
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadNextD.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"pushed" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
									}
								}
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")"),
								"padding" : nexacro.PaddingObject("0px 5px 10px 0px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
							}
						}
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevM.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadPrevD.png\")")
									}
								}
							}
						}
					},
					"Menu" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"pushed" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
									}
								}
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")"),
								"padding" : nexacro.PaddingObject("0px 10px 10px 20px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftD.png\")")
							}
						}
					}
				}
			},
			"monthspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									}
								}
							}
						}
					}
				}
			},
			"yearspin" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #0e1934"),
										"padding" : nexacro.PaddingObject("1px 0px 3px 0px")
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinUpBtnM.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnD.png\")")
											}
										}
									}
								}
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"focused" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											},
											"selected" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_dpkHeadSpinDownBtnM.png\")")
											}
										}
									}
								}
							}
						}
					},
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					}
				}
			},
			"weekband" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"readonly" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									},
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("#bebebe")
									},
									"mouseover" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_saturday" :
									{
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_sunday" :
									{
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_trailingday" :
									{
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_today" :
									{
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#333333"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									}
								}
							}
						}
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#d0d0d0")
					}
				},
				"class" :
				[
					{
						"edi_LF_SearchEdit" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"color" : nexacro.ColorObject("#9b9e9f")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"color" : nexacro.ColorObject("#9b9e9f")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"color" : nexacro.ColorObject("#9b9e9f")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"color" : nexacro.ColorObject("#9b9e9f")
								},
								"disabled" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 2px solid #9b9e9f, 0px none"),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"color" : nexacro.ColorObject("#9b9e9f")
								},
								"nulltext" :
								{
									"color" : nexacro.ColorObject("#9b9e9f")
								}
							}
						}
					},
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					},
					{
						"edit_TF_topSearch" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#666666"),
									"border" : nexacro.BorderObject("1px solid #f37321")
								}
							}
						}
					}
				]
			},
			"FileUpload" :
			{
				"self" :
				{
					"mouseover" :
					{
					},
					"focused" :
					{
					},
					"selected" :
					{
					},
					"disabled" :
					{
					}
				}
			},
			"fileuploaditem" :
			{
				"parent" :
				{
					"FileUpload" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 2px solid #ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover" :
									{
									},
									"pushed" :
									{
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"nulltext" :
									{
										"border" : nexacro.BorderObject("1px solid #c8c8c8"),
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #113367, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("2px solid #113367, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("2px solid #113367, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("2px solid #113367, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("2px solid #113367, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
					}
				},
				"class" :
				[
					{
						"grd_LF_TreeGrd" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none")
								},
								"readonly" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"grd_WF_hwGrd" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #f36910, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #f36910, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #f36910, 1px solid #d3d3d3 1px solid #d3d3d3, 1px solid #d3d3d3")
								}
							}
						}
					},
					{
						"grd_WF_hwGrd02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3")
								}
							}
						}
					},
					{
						"grd_WF_hwGrd03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3, 1px solid #d3d3d3")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3, 1px solid #d3d3d3")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px solid #938d8a, 1px solid #d3d3d3, 1px solid #d3d3d3")
								}
							}
						}
					}
				]
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #e0e1e1, 1px solid #d3d3d3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
											}
										},
										"class" :
										[
											{
												"grd_WF_hwGrd" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("2px solid #f36910,1px solid #e0e1e1,1px solid #d3d3d3,0px none"),
															"color" : nexacro.ColorObject("#373331")
														}
													}
												}
											},
											{
												"grd_WF_hwGrd03" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#333333"),
															"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
														},
														"mouseover" :
														{
															"color" : nexacro.ColorObject("#333333"),
															"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
														}
													}
												}
											}
										]
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #f5f5f5, 1px solid #f5f5f5, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
											}
										},
										"class" :
										[
											{
												"grd_LF_TreeGrd" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none"),
															"padding" : nexacro.PaddingObject("0px 0px 0px 35px"),
															"color" : nexacro.ColorObject("#dddddd"),
															"font" : nexacro.FontObject("15px/normal \"Malgun Gothic\",\"Arial\"")
														},
														"focused" :
														{
															"border" : nexacro.BorderObject("0px none"),
															"padding" : nexacro.PaddingObject("0px 0px 0px 35px"),
															"color" : nexacro.ColorObject("#dddddd"),
															"font" : nexacro.FontObject("15px/normal \"Malgun Gothic\",\"Arial\"")
														},
														"selected" :
														{
															"color" : nexacro.ColorObject("#ffffff"),
															"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
														},
														"mouseover" :
														{
														}
													}
												}
											},
											{
												"grd_WF_hwGrd" :
												{
													"self" :
													{
														"enabled" :
														{
															"border" : nexacro.BorderObject("0px none")
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											},
											{
												"grd_WF_hwGrd02" :
												{
													"self" :
													{
														"enabled" :
														{
															"font" : nexacro.FontObject("bold 10pt/normal \"Malgun Gothic\",\"Arial\""),
															"padding" : nexacro.PaddingObject("0px 10px")
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											},
											{
												"grd_WF_hwGrd03" :
												{
													"self" :
													{
														"enabled" :
														{
															"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\"")
														},
														"mouseover" :
														{
														},
														"selected" :
														{
														}
													}
												}
											}
										]
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#113367"),
												"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											}
										},
										"class" :
										[
											{
												"grd_WF_hwGrd02" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#f03401"),
															"border" : nexacro.BorderObject("1px solid #f5f5f5")
														}
													}
												}
											},
											{
												"grd_WF_hwGrd03" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#f03401"),
															"border" : nexacro.BorderObject("1px solid #f5f5f5")
														}
													}
												}
											}
										]
									}
								}
							}
						}
					}
				},
				"class" :
				[
					{
						"Cellgrd_WF_Head" :
						{
							"parent" :
							{
								"row" :
								{
									"parent" :
									{
										"body" :
										{
											"parent" :
											{
												"Grid" :
												{
													"self" :
													{
														"enabled" :
														{
															"color" : nexacro.ColorObject("#032c6c"),
															"font" : nexacro.FontObject("normal 700 14px/normal \"Malgun Gothic\",\"Arial\""),
															"border" : nexacro.BorderObject("0px none,1px solid #e0e1e1,1px solid #d3d3d3,0px none")
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				]
			},
			"body" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"readonly" :
							{
							}
						}
					}
				}
			},
			"selection" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"Grid" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("2px solid #93acd4")
									}
								}
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #a1d9e9, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxS.png\")")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxMS.png\")")
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #032c6c")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #e7e7e7"),
								"color" : nexacro.ColorObject("#333333"),
								"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #b1b1b1"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					},
					"cell" :
					{
						"class" :
						[
							{
								"grd_statusBtn" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtn.png\")")
																},
																"focused" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtn.png\")")
																},
																"mouseover" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtn.png\")")
																},
																"pushed" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtn.png\")")
																},
																"selected" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtn.png\")")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							},
							{
								"grd_statusBtnS" :
								{
									"parent" :
									{
										"row" :
										{
											"parent" :
											{
												"body" :
												{
													"parent" :
													{
														"Grid" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtnS.png\")")
																},
																"focused" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtnS.png\")")
																},
																"mouseover" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtnS.png\")")
																},
																"pushed" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtnS.png\")")
																},
																"selected" :
																{
																	"border" : nexacro.BorderObject("0px none"),
																	"icon" : nexacro.UrlObject("URL(\"theme://images/img_grd_statusBtnS.png\")")
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						]
					}
				}
			},
			"celltreeitem" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"class" :
												[
													{
														"grd_LF_TreeGrd" :
														{
															"self" :
															{
																"enabled" :
																{
																	"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 16px solid transparent")
																},
																"mouseover" :
																{
																}
															}
														}
													}
												]
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeBtnCollapse.png\")")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeBtnExpand.png\")")
									},
									"leaf" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgItem.png\")")
									}
								}
							},
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														[
															{
																"grd_LF_TreeGrd" :
																{
																	"self" :
																	{
																		"collapse" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menuSubIconC.png\")")
																		},
																		"expand" :
																		{
																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_menuSubIconE.png\")")
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemcheckbox" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_chkBoxN.png\")")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgItem.png\")")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgCollapse.png\")")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImgExpand.png\")")
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px dotted #c7c7c7")
							}
						}
					}
				}
			},
			"GroupBox" :
			{
				"self" :
				{
					"mouseover" :
					{
					},
					"disabled" :
					{
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#032c6c")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#032c6c")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #f2f2f2")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
						"letterSpacing" : nexacro.CSSValueObject("-0.5px")
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #f89b6c")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				[
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"focused" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 8px"),
								"color" : nexacro.ColorObject("#c7e6fc"),
								"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 8px"),
								"color" : nexacro.ColorObject("#c7e6fc"),
								"font" : nexacro.FontObject("bold 13px \"Malgun Gothic\",\"Arial\"")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#005996")
							}
						}
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("8px 5px 8px 5px")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#333333")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#afafaf")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px 5px 5px 10px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"selected" :
							{
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"disabled" :
											{
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
												"color" : nexacro.ColorObject("#c6c6c6")
											},
											"disabled" :
											{
												"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
												"color" : nexacro.ColorObject("#c6c6c6")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									},
									"mouseover" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									},
									"disabled" :
									{
										"padding" : nexacro.PaddingObject("0px 4px 0px 0px"),
										"color" : nexacro.ColorObject("#c6c6c6")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemicon" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"mouseover" :
											{
											},
											"disabled" :
											{
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
											},
											"mouseover" :
											{
												"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#d6d6d6")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 16px 0px 5px")
									}
								}
							}
						}
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("1px solid #8e8e8e"),
						"color" : nexacro.ColorObject("#000000")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"Radio" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"focused" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px")
					},
					"readonly" :
					{
						"padding" : nexacro.PaddingObject("0px")
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"readonly" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnN.png\")"),
								"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnS.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnD.png\")"),
								"color" : nexacro.ColorObject("#afafaf")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnMS.png\")")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_radioBtnDS.png\")"),
								"color" : nexacro.ColorObject("#afafaf")
							}
						}
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				[
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					}
				]
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#d0d0d0")
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("0px 0px 12px 0px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("0px 0px 12px 0px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("0px 0px 12px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep.png')"),
								"padding" : nexacro.PaddingObject("2px 4px")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							},
							"mouseover_selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							},
							"mouseover_pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/img_MN_imgStep_S.png')")
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
						"color" : nexacro.ColorObject("#333333"),
						"font" : nexacro.FontObject("normal 10pt \"Malgun Gothic\",\"Arial\"")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#afafaf")
					}
				},
				"class" :
				[
					{
						"sta_LF_MenuTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 1px 20px"),
									"color" : nexacro.ColorObject("#fffcdb"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 1px 20px"),
									"color" : nexacro.ColorObject("#fffcdb"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
								},
								"disabled" :
								{
									"padding" : nexacro.PaddingObject("0px 0px 1px 20px"),
									"color" : nexacro.ColorObject("#fffcdb"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_Location" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#d1d0d0"),
									"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#d1d0d0"),
									"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#d1d0d0"),
									"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_InputLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #e5e5e5, 0px none, 1px solid #e5e5e5"),
									"padding" : nexacro.PaddingObject("0px 6px"),
									"color" : nexacro.ColorObject("#666666")
								}
							}
						}
					},
					{
						"sta_WF_InputLabelL" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 1px solid #e5e5e5, 0px none, 1px solid #f3f7f7"),
									"padding" : nexacro.PaddingObject("0px 6px"),
									"color" : nexacro.ColorObject("#666666")
								}
							}
						}
					},
					{
						"sta_WF_InputBgT" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b9bec0, 0px none, 1px solid #e5e5e5, 0px none")
								}
							}
						}
					},
					{
						"sta_WF_InputBgM" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #e5e5e5, 0px none, 1px solid #e5e5e5, 0px none")
								}
							}
						}
					},
					{
						"sta_WF_InputBgB" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #e5e5e5, 0px none, 1px solid #b9bec0, 0px none")
								}
							}
						}
					},
					{
						"sta_WF_InputBgTB" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b9bec0, 0px none, 1px solid #b9bec0, 0px none")
								}
							}
						}
					},
					{
						"sta_WF_InputBtitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b9bec0, 1px solid #d3d3d3, 1px solid #b9bec0, 0px none"),
									"padding" : nexacro.PaddingObject("0px 6px"),
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#113367")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #b9bec0, 1px solid #d3d3d3, 1px solid #b9bec0, 0px none"),
									"padding" : nexacro.PaddingObject("0px 6px"),
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#113367")
								}
							}
						}
					},
					{
						"sta_MAIN_Title" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#113367")
								},
								"mouseover" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#113367")
								},
								"disabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#113367")
								}
							}
						}
					},
					{
						"sta_WF_mainTextB" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("normal 700 40pt/normal \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("normal 700 40pt/normal \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_mainTextS" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("30px \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("30px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_footerAddress" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("14px/20px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_mainQmenu" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 20px 0px 0px"),
									"border" : nexacro.BorderObject("0px none,1px solid #0d3676,0px none,0px none")
								}
							}
						}
					},
					{
						"sta_WF_mainSiteimg" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"sta_WF_Label" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4, 0px none, 1px solid #d5dde4, 0px none"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px"),
									"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Verdana\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4, 0px none, 1px solid #d5dde4, 0px none"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px"),
									"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Verdana\""),
									"color" : nexacro.ColorObject("#000000")
								}
							}
						}
					},
					{
						"sta_WF_Label_P" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4, 0px none, 1px solid #d5dde4, 0px none"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px"),
									"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Verdana\""),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4, 0px none, 1px solid #d5dde4, 0px none"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px"),
									"font" : nexacro.FontObject("bold 9pt \"Malgun Gothic\",\"Verdana\""),
									"color" : nexacro.ColorObject("#000000")
								}
							}
						}
					},
					{
						"sta_WF_Labelbg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 12px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #d5dde4"),
									"padding" : nexacro.PaddingObject("1px 0px 0px 12px")
								}
							}
						}
					},
					{
						"styFormTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("16pt Malgun Gothic"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
									"color" : nexacro.ColorObject("#000000")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"font" : nexacro.FontObject("16pt Malgun Gothic"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
									"color" : nexacro.ColorObject("#000000")
								}
							}
						}
					},
					{
						"sta_WF_Subtitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("11pt Malgun Gothic")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#000000"),
									"font" : nexacro.FontObject("11pt Malgun Gothic")
								}
							}
						}
					},
					{
						"sta_GID_Title" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c6c6c5"),
									"color" : nexacro.ColorObject("#444444"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Verdana\"")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #c6c6c5"),
									"color" : nexacro.ColorObject("#444444"),
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Verdana\"")
								}
							}
						}
					},
					{
						"sta_GID_txt" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#5300dc"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#5300dc"),
									"font" : nexacro.FontObject("10pt \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_SearchLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_SearchLabel_P" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("0px none"),
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("14px/normal \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_title01" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#333333"),
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("1px 0px 0px 17px")
								}
							}
						}
					},
					{
						"sta_WF_title02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("normal bold 14px/normal \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#d7381e")
								},
								"mouseover" :
								{
									"font" : nexacro.FontObject("normal bold 14px/normal \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#d7381e")
								}
							}
						}
					},
					{
						"sta_WF_btnline" :
						{
							"self" :
							{
								"enabled" :
								{
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								},
								"mouseover" :
								{
									"padding" : nexacro.PaddingObject("1px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_box01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #9c9c9c")
								}
							}
						}
					},
					{
						"sta_WF_box02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b9c5dc"),
									"font" : nexacro.FontObject("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_box02C" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"font" : nexacro.FontObject("11pt \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_box03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #93acd4"),
									"padding" : nexacro.PaddingObject("10px"),
									"color" : nexacro.ColorObject("#111111")
								}
							}
						}
					},
					{
						"sta_WF_box05" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #6682ae"),
									"color" : nexacro.ColorObject("#1b1b1b"),
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("10px")
								}
							}
						}
					},
					{
						"sta_WF_box06" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c7c7c7")
								}
							}
						}
					},
					{
						"sta_WF_navTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#b7b7b7")
								}
							}
						}
					},
					{
						"sta_WF_navTitle_S" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#ffffff")
								},
								"mouseover" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"sta_WF_navText" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#111111"),
									"padding" : nexacro.PaddingObject("0px 5px 0px 20px")
								},
								"mouseover" :
								{
									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#f37321")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#cccccc")
								}
							}
						}
					},
					{
						"sta_WF_condition01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_condition02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_cp_box01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #dddddd")
								}
							}
						}
					},
					{
						"sta_WF_menuTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px/normal \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#032c6c"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
								}
							}
						}
					},
					{
						"sta_WF_schTextRed" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#f15353"),
									"font" : nexacro.FontObject("30px \"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_weekDay01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("1px solid #e3e3e3")
								}
							}
						}
					},
					{
						"sta_WF_weekDay02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("1px solid #e3e3e3"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
								}
							}
						}
					},
					{
						"sta_WF_notepad" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #eceb96")
								}
							}
						}
					},
					{
						"sta_WF_clock01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("3px solid #032c6c")
								}
							}
						}
					},
					{
						"sta_WF_timer" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#032c6c"),
									"font" : nexacro.FontObject("30px \"Nanum Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_cm_text14CWhite" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_WF_clock01Text" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#fc4e37"),
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
								}
							}
						}
					},
					{
						"sta_cm_box03" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("1px solid #c0c2c5")
								}
							}
						}
					},
					{
						"sta_WF_popTitle01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #cbcbcb, 0px none"),
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
								}
							}
						}
					},
					{
						"sta_WF_popupTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 18px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("0px 0px 0px 15px"),
									"color" : nexacro.ColorObject("#222222")
								}
							}
						}
					},
					{
						"sta_WF_cell01R" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"color" : nexacro.ColorObject("#222222"),
									"font" : nexacro.FontObject("13px \"Malgun Gothic\",\"Arial\""),
									"padding" : nexacro.PaddingObject("4px 8px 4px 8px")
								}
							}
						}
					},
					{
						"sta_WF_chartText" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#666666")
								}
							}
						}
					},
					{
						"sta_WF_chartTitle" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#666666")
								}
							}
						}
					},
					{
						"sta_WF_chartData01" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6c6c6c"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
								}
							}
						}
					},
					{
						"sta_WF_chartData02" :
						{
							"self" :
							{
								"enabled" :
								{
									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#6c6c6c"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
								}
							}
						}
					},
					{
						"sta_WF_dashed" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none,0px none,0px none,1px dashed #b6ada8")
								}
							}
						}
					},
					{
						"sta_WF_hwBox01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f0eeed")
								}
							}
						}
					},
					{
						"sta_WF_hwLabel" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"sta_WF_hwLabel01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#333333")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#333333")
								}
							}
						}
					},
					{
						"sta_WF_hwLabel01E" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#333333")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("1px solid #cbcbcb"),
									"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
									"color" : nexacro.ColorObject("#333333")
								}
							}
						}
					},
					{
						"sta_WF_hwMain01" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f0eeed")
								},
								"mouseover" :
								{
								}
							}
						}
					},
					{
						"sta_WF_hwMain02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f0eeed")
								},
								"mouseover" :
								{
								}
							}
						}
					}
				]
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 3px 1px 3px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinUpD.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinLeftD.png\")")
							}
						}
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownD.png\")")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinRightD.png\")")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("3px 0px 3px 0px")
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #eaeaea,1px solid #eaeaea,1px solid #d8d8d8,1px solid #eaeaea"),
								"padding" : nexacro.PaddingObject("7px 12px"),
								"color" : nexacro.ColorObject("#777777"),
								"font" : nexacro.FontObject("normal 700 13px/12px \"Malgun Gothic\",\"Arial\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8"),
								"color" : nexacro.ColorObject("#666666")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8"),
								"color" : nexacro.ColorObject("#666666")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #113367,1px solid #d8d8d8,1px solid #ffffff,1px solid #d8d8d8"),
								"padding" : nexacro.PaddingObject("6px 12px 7px 12px"),
								"color" : nexacro.ColorObject("#032c6c")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 12px")
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #d3d3d3")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #c8c8c8"),
						"padding" : nexacro.PaddingObject("4px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #032c6c")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#afafaf")
					},
					"readonly" :
					{
					},
					"nulltext" :
					{
						"color" : nexacro.ColorObject("#d0d0d0")
					}
				},
				"class" :
				[
					{
						"com_WF_Essential" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #f44528")
								}
							}
						}
					},
					{
						"txa_WF_notepad" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("12px \"Nanum Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"mouseover" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("12px \"Nanum Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"focused" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("12px \"Nanum Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								},
								"disabled" :
								{
									"color" : nexacro.ColorObject("#101010"),
									"font" : nexacro.FontObject("12px \"Nanum Gothic\",\"Arial\""),
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					}
				]
			},
			"treeitemtext" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"class" :
														[
															{
																"grd_LF_TreeGrd" :
																{
																	"self" :
																	{
																		"enabled" :
																		{
																			"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 3px solid transparent"),
																			"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Arial\"")
																		}
																	}
																}
															}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Div" :
			{
				"class" :
				[
					{
						"div_WF_Search" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d3d3d3")
								}
							}
						}
					},
					{
						"div_WF_DefaultBox" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #d3d3d3")
								}
							}
						}
					},
					{
						"div_WF_BlueBox" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"div_TF_topBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"div_LF_menuBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"color" : nexacro.ColorObject("#ffffff")
								}
							}
						}
					},
					{
						"div_WF_SearchBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #b9c5dc")
								}
							}
						}
					},
					{
						"div_WF_portBox" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("0px none")
								}
							}
						}
					},
					{
						"div_WF_portBox2" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("2px dotted #ff6c54")
								},
								"mouseover" :
								{
									"border" : nexacro.BorderObject("2px dotted #ff6c54")
								},
								"focused" :
								{
									"border" : nexacro.BorderObject("2px dotted #ff6c54")
								}
							}
						}
					},
					{
						"div_WF_hwBg" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px dashed #ffa77c")
								}
							}
						}
					},
					{
						"div_WF_hwBg02" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c7c7c7")
								}
							}
						}
					},
					{
						"div_WF_hwBg03" :
						{
							"self" :
							{
								"enabled" :
								{
									"border" : nexacro.BorderObject("1px solid #c7c7c7")
								}
							}
						}
					}
				]
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Min.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Max.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Normal.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Close.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnN.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnM.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dropBtnD.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinUpD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxN.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxM.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxMS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxD.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_chkBoxDS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadNextD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadPrevD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinUpBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnM.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_dpkHeadSpinDownBtnD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeBtnCollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeBtnExpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgItem.png")] = { width:8, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgCollapse.png")] = { width:10, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImgExpand.png")] = { width:10, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_TF_menuBgS.png")] = { width:1, height:64 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnN.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnM.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnD.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnMS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_radioBtnDS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_MN_imgStep.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_MN_imgStep_S.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftN.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinLeftD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightN.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightM.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinRightD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/tab_AF_tabExtraBtn.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_settingN.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_settingMP.png")] = { width:21, height:21 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_userInfoN.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_userInfoMP.png")] = { width:25, height:25 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftOpenN.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftOpenM.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuN.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_searchN.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_historyN.png")] = { width:16, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menuSubIconC.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menuSubIconE.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LF_menuTitle.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeN.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeM.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_homeD.png")] = { width:14, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_leftTabChaN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_leftTabChaM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_rightTabChaN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_rightTabChaM.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnFullN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnFullM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnWinN.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnWinM.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnVDivN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnVDivM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnHDivN.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnHDivM.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnCloseN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_scnCloseM.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/all_WF_iconEssential.png")] = { width:5, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_newPopup.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_newPopupD.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_newPopupR.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_newPopupRD.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnM.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnP.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchBtnD.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchIcon.png")] = { width:11, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpN.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpP.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_helpD.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_footerLogo01.png")] = { width:131, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_footerLogo02.png")] = { width:160, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_mainFloat.png")] = { width:26, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_logo_support.png")] = { width:165, height:49 };
		imgcache[nexacro._getImageLocation("theme://images/img_logo_playnx.png")] = { width:160, height:53 };
		imgcache[nexacro._getImageLocation("theme://images/img_logo_tobetong.png")] = { width:170, height:27 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainSite.png")] = { width:13, height:23 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn01.png")] = { width:53, height:40 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn02.png")] = { width:54, height:41 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn03.png")] = { width:51, height:38 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn04.png")] = { width:50, height:39 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn05.png")] = { width:47, height:47 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainQbtn06.png")] = { width:32, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo.png")] = { width:140, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMark_S.png")] = { width:17, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMark.png")] = { width:17, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Label_P.png")] = { width:7, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search_O.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search_P.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search_D.png")] = { width:17, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Subtitle02.png")] = { width:13, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_btnline.png")] = { width:11, height:23 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkN.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkS.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_bookMarkM.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_search01.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_search01_D.png")] = { width:28, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_menuOpen.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_menuOpen_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_menuClose.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_menuClose_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_navTitle.png")] = { width:16, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_navCloseW.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftSpinIcon.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_leftSpinIconD.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_rightSpinIcon.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_rightSpinIconD.png")] = { width:5, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_logoutN.png")] = { width:17, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_logoutMP.png")] = { width:17, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightW.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftW.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_widgetMove04.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_division.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_multiple.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_minus.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_plus.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_result.png")] = { width:18, height:10 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_addFile.png")] = { width:17, height:15 };
		imgcache[nexacro._getImageLocation("imagerc::btn_menu_close.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_widgetMove02.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_widgetMove03.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("imagerc::btn_pop_close.png")] = { width:19, height:19 };
		imgcache[nexacro._getImageLocation("imagerc::btn_B_down.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_up.png")] = { width:13, height:4 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_up_D.png")] = { width:13, height:4 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_down.png")] = { width:13, height:4 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_down_D.png")] = { width:13, height:4 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_inputHan.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_inputHan_D.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_outputHan.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_outputHan_D.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_input.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_input_D.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_output.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_output_D.png")] = { width:28, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_reset.png")] = { width:20, height:14 };
		imgcache[nexacro._getImageLocation("imagerc::btn_WF_print.png")] = { width:22, height:13 };
		imgcache[nexacro._getImageLocation("imagerc::icon_WF_move.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort01.png")] = { width:80, height:80 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort02.png")] = { width:60, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort03.png")] = { width:60, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort04.png")] = { width:60, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort05.png")] = { width:60, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort06.png")] = { width:110, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort07.png")] = { width:100, height:60 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_iconPort08.png")] = { width:60, height:80 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_chartUp.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("imagerc::img_WF_chartDown.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_logo01.png")] = { width:300, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_logoTopW.png")] = { width:154, height:38 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_boxLogo.png")] = { width:163, height:116 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_manBtn01.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_manBtn02.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_manBtn03.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_manBtn04.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_manBtn05.png")] = { width:50, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_accoClose.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_accOpen.png")] = { width:22, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_process.png")] = { width:810, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_UserInfo.png")] = { width:240, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain01.png")] = { width:240, height:186 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain01S.png")] = { width:240, height:186 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain01R.png")] = { width:158, height:170 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain02.png")] = { width:240, height:186 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain02S.png")] = { width:240, height:186 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_hwMain02R.png")] = { width:158, height:170 };
		imgcache[nexacro._getImageLocation("theme://images/img_grd_statusBtn.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_grd_statusBtnS.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_grd_detail.png")] = { width:11, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreM.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreN.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MAIN_moreP.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_personDefault.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_decP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incD.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incM.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incN.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_incP.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_navClose.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_searchIconBK.png")] = { width:11, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxM.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxMS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxN.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_chkBoxS.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_bookmarkMenuBgMS.png")] = { width:31, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_bookmarkMenuBgN.png")] = { width:31, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_historyBgMS.png")] = { width:32, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_historyBgN.png")] = { width:32, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menu3depthC.png")] = { width:9, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_menu3depthE.png")] = { width:9, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_searchBgMS.png")] = { width:27, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_searchBgN.png")] = { width:27, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_MAIN_listBL.png")] = { width:3, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/grd_MAIN_newList.png")] = { width:12, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_expandBtn.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_headEditCell.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_LF_top5Icon.png")] = { width:46, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_bg.jpg")] = { width:1920, height:1080 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logId.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logo.png")] = { width:174, height:38 };
		imgcache[nexacro._getImageLocation("theme://images/img_LOGIN_logPwd.png")] = { width:16, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_accou.png")] = { width:28, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_const.png")] = { width:35, height:36 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_field.png")] = { width:34, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_insa.png")] = { width:41, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_performBG.png")] = { width:280, height:98 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_resou.png")] = { width:33, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/img_MAIN_Safe.png")] = { width:30, height:34 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_line.png")] = { width:1, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_Logo_TOBE.png")] = { width:224, height:75 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_menuBtn.png")] = { width:26, height:19 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personDef.png")] = { width:42, height:42 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personIcon.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_personMask.png")] = { width:55, height:64 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_popupIcon.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_top_logo01.png")] = { width:127, height:28 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_chartDown.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_chartUp.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_defaultImgN.png")] = { width:46, height:81 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainBg02.png")] = { width:2000, height:480 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainFloat.png")] = { width:35, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainLogo.png")] = { width:500, height:200 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual.png")] = { width:1600, height:450 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual0001.png")] = { width:500, height:462 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual0002.png")] = { width:500, height:400 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual0003.png")] = { width:600, height:400 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual001.png")] = { width:2000, height:480 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual002.png")] = { width:2000, height:480 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual003.png")] = { width:2000, height:480 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual01.png")] = { width:2000, height:600 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual02.png")] = { width:2000, height:600 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual03.png")] = { width:2000, height:600 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_mainVisual_QR.png")] = { width:160, height:160 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_navTitleW.png")] = { width:16, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_workLogo.png")] = { width:500, height:200 };
		imgcache[nexacro._getImageLocation("theme://images/KakaoTalk_20190808_095440507.gif")] = { width:200, height:150 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_logoTop.png")] = { width:154, height:38 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_midTitle.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_seaFieldLabel.png")] = { width:4, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_smaTitle.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMarkN.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMarkO.png")] = { width:17, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_bookMarkS.png")] = { width:16, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_historyS.png")] = { width:16, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuBg.png")] = { width:1, height:33 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_menuS.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/tab_LF_searchS.png")] = { width:13, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/testimg.jpg")] = { width:238, height:348 };
		imgcache[nexacro._getImageLocation("theme://images/waitimage.gif")] = { width:100, height:100 };
	};
}
)();